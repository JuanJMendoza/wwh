const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "/index.html"));
  res.statusCode = 302;
  res.setHeader(
    "Location",
    "https://mailchi.mp/e1d053fc2493/world-wide-handball"
  );
  res.end();
});

app.listen(process.env.PORT || 3000);
