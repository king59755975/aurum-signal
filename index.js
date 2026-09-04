const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/mt5/signal", (req, res) => {
  const token = req.query.token;

  if (token !== "aurum_boot") {
    return res.status(401).json({ error: "invalid token" });
  }

  const signal = {
    action: "BUY",
    id: "test_" + Date.now(),
    entry: 0,
    sl: 0,
    tp: 0,
    lot: 0.01
  };

  res.json(signal);
});

app.get("/", (req, res) => {
  res.send("AURUM Signal API is running");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
