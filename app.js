const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "/index.html"));
  res.redirect("https://mailchi.mp/e1d053fc2493/world-wide-handball");
});

app.listen(process.env.PORT || 3000);
