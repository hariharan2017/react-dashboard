const express = require("express");
const bodyParser = require("body-parser");

const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const generateAdminToken = () => {
  const currentTime = new Date().getTime();
  const expiryTime = 30 * 60 * 1000;
  const data = Buffer.from(
    JSON.stringify({
      role: "DashboardAdmin",
      issuer: "Test",
      username: "Test User",
      exp: currentTime + expiryTime,
      iat: currentTime,
    })
  ).toString("base64");
  return `${data}`;
};

app.post("/api/v1/authentication/login", (req, res) => {
  res.status(200);
  res.send(generateAdminToken());
});

app.listen(port);
console.log(`Mock Server is running on port number: ${port}`);