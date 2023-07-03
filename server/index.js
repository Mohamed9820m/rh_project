const express = require("express");

const db = require('./database-mysql');


const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

//app.use("/",);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
