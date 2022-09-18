const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "/index.html"));
  res.redirect("https://mailchi.mp/e1d053fc2493/world-wide-handball");
});

app.listen(PORT, () => {
  console.log(`Sever is live on port ${PORT}`);
});
