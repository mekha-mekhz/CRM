const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const conncetDb=require('./config/db')
const customroute=require('./routes/customroutes')
conncetDb()
app.use("/api/",customroute)
app.listen(process.env.PORT, () => {
  console.log(`Listening to the port${process.env.PORT}`);
});
