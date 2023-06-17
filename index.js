// server/index.js

const express = require("express");
var cors = require('cors')

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors())
app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});