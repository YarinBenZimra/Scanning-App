const { spawn } = require("child_process");
const logger = require("../utils/logger");

const domainRegex = /^[a-zA-Z0-9-_.]+\.[a-zA-Z]{2,}$/;

const scanWebsite = (req, res) => {
  let { domain } = req.query;

  if (!domain || !domainRegex.test(domain)) {
    logger.error(`Invalid domain: ${domain}`);
    return res.status(400).json({ error: "Invalid domain format." });
  }
  if (!domain.startsWith("www")) {
    // Running httpx requests without the 'www' prefix (e.g., "example.com" instead of "www.example.com")
    // may result in missing CNAME records and other properties in the output.
    domain = `www.${domain}`;
  }
  const command = "httpx";
  const args = ["-json", "-silent", "-sc", "-u", domain];

  const childProcess = spawn(command, args, {
    stdio: ["ignore"],
    shell: true,
  });

  let output = "";
  let errorOutput = "";

  childProcess.stdout.on("data", (data) => {
    output += data.toString();
  });

  childProcess.stderr.on("data", (data) => {
    errorOutput += data.toString();
  });

  childProcess.on("close", (code) => {
    if (code !== 0) {
      logger.error(`HTTPX process exited with code ${code}`);
      if (errorOutput) {
        logger.error(`HTTPX stderr: ${errorOutput}`);
      }
      return res.status(500).json({ error: "Failed to scan the website." });
    }
    try {
      const httpxResult = JSON.parse(output);
      res.status(200).json(httpxResult);
      logger.info(`Scan Results: ${JSON.stringify(httpxResult)}`);
    } catch (parseError) {
      logger.error(`Error parsing HTTPX output: ${parseError.message}`);
      res.status(500).json({ error: "Invalid scan results." });
    }
  });

  childProcess.on("error", (err) => {
    logger.error(`Error spawning HTTPX: ${err.message}`);
    return res.status(500).json({ error: "Failed to execute HTTPX." });
  });
};

module.exports = { scanWebsite };
