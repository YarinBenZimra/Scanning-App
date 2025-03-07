import axios from "axios";

export async function scanDomain(domain) {
  const response = await axios.get("http://localhost:5000/api/scan", {
    params: { domain },
  });
  return response.data;
}
