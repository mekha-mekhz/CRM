const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();

const conncetDb=require('./config/db')
const customroute=require('./routes/customroutes')
const caseroute=require('./routes/caseroute')
const userroute=require('./routes/userroute')
conncetDb()
app.use("/api/",customroute)
app.use('api/case',caseroute)
app.use('/api/users',userroute)
app.listen(process.env.PORT, () => {
  console.log(`Listening to the port${process.env.PORT}`);
});
