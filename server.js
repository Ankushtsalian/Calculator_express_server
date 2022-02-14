const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", (req, res) => {
  var n1 = req.body.num1;
  var n2 = req.body.num2;
  var r = n1 + n2;
  res.send("hello" + r);
});

app.listen(3000, () => console.log("Hello"));
