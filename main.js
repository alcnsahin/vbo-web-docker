const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const PORT = 9999;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});

app.get("/", async (req, res, next) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    console.log("path: " + req.route.path + " | time: " + today.toUTCString());
    res.status(200).send("<h3>Fist step for Container world :)</h3>");
    next();
});