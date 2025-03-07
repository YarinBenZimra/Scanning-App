require("dotenv").config();

const express = require("express");
const cors = require("cors");
const scanRoutes = require("./routes/scanRoutes");
const logger = require("./utils/logger");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  logger.info(
    `Incoming request | resource: ${req.url.split("?")[0]} | HTTP Verb ${
      req.method
    }`
  );
  next();
});

// Routes
app.use("/api/scan", scanRoutes);

app.get("/", (req, res) => {
  res.send("Website Scanner API is running!");
});

app.use("*", (req, res) => {
  logger.warn(`Endpoint not found: [${req.method} ${req.url}]`);
  res
    .status(404)
    .json({ error: `Endpoint not found: [${req.method} ${req.url}]` });
});

// Start the server
const server = app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});

const shutdown = (signal) => {
  return () => {
    logger.error(`Received ${signal}. Shutting down the server...`);

    server.close(() => {
      logger.error("Server closed. Exiting process...");
      process.exit(0);
    });
  };
};

// Handle signals for shutdown

process.on("SIGINT", shutdown("SIGINT"));
process.on("SIGTERM", shutdown("SIGTERM"));
