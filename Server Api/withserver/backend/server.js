const express = require("express");
const cors    = require("cors");

const app  = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ────────────────────────────────────────────────
app.use(cors({ origin: "*" }));
app.use(express.json());

// ── Health check ──────────────────────────────────────────────
app.get("/health", (_req, res) => res.json({ status: "ok" }));


// Body: { url, method, headers, params, body }
app.post("/proxy", async (req, res) => {
  const { url, method = "GET", headers = {}, params = {}, body } = req.body;

  if (!url) {
    return res.status(400).json({ error: "Missing required field: url" });
  }

  // Append query params to URL
  let targetUrl = url;
  const qs = new URLSearchParams(params).toString();
  if (qs) targetUrl += (targetUrl.includes("?") ? "&" : "?") + qs;

  // Build fetch options
  const fetchOptions = { method: method.toUpperCase(), headers };

  if (!["GET", "DELETE", "HEAD"].includes(method.toUpperCase()) && body != null) {
    // Detect content type and serialize accordingly
    const ct = (headers["Content-Type"] || headers["content-type"] || "").toLowerCase();
    if (ct.includes("x-www-form-urlencoded") && typeof body === "string") {
      fetchOptions.body = body;
    } else {
      fetchOptions.body = typeof body === "string" ? body : JSON.stringify(body);
    }
  }

  const startMs = Date.now();

  try {
    const upstream = await fetch(targetUrl, fetchOptions);
    const elapsed  = Date.now() - startMs;

    // Collect response headers
    const respHeaders = {};
    upstream.headers.forEach((val, key) => { respHeaders[key] = val; });

    // Read raw text and try to parse as JSON
    const rawText = await upstream.text();
    let parsed;
    try   { parsed = JSON.parse(rawText); }
    catch { parsed = rawText; }

    return res.json({
      status:      upstream.status,
      statusText:  upstream.statusText,
      headers:     respHeaders,
      body:        parsed,
      elapsed_ms:  elapsed,
      size_bytes:  Buffer.byteLength(rawText, "utf8"),
    });
  } catch (err) {
    return res.status(502).json({
      error:   "Upstream request failed",
      message: err.message,
    });
  }
});

app.listen(PORT, () =>
  console.log(`✅  Zoho API Proxy running → http://localhost:${PORT}`)
);