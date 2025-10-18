const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  company: { type: String, required: true },
  phone: { type: Number },
  status:{type:String}
});
module.exports = mongoose.model('customer', customerSchema);
