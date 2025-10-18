const Customer=require('../models/custommodels')
exports.createcustomer=async(req,res)=>{
const {name,email,address,company,phone,status}=req.body
if( !name || !email || !address || !company || !phone || !status)
    {
    return res.status(400).json({ message: "all fields are required" });
}try{
 const newcust = new Customer({ name, email, address,company,phone,status });
    await newcust.save();
    return res.status(201).json({ message: "sucess", customer: newcust });
  } catch (err) {
    return res.status(500).json({ message: `server error,${err.message}` });
  }
};
exports.getcustomer = async (req, res) => {
  try {
    const customers = await Customer.find();
    return res.status(200).json({
      message: "sucess",
      data: customers,
    });
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};
exports.updatecustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, address,company,phone,status} = req.body;
    const updateCustomer = await Customer.findByIdAndUpdate(id, {
        name, email, address,company,phone,status
      
    });
    if (!updateCustomer)
      return res.status(400).json({ message: "failed", error: "data not found" });
    return res.status(200).json({ message: "sucess", data: updateCustomer });
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};
exports.deletecustomer = async (req, res) => {
  try {
    const { id } = req.params;
  const { name, email, address,company,phone,status} = req.body;
    const deleteCustomer = await Customer.findByIdAndDelete(id, {
         name, email, address,company,phone,status
    });
    if (!deleteCustomer)
      return res.status(400).json({ message: "failed", error: "data not found" });
    return res.status(200).json({ message: "sucess", data: deleteCustomer});
  } catch (error) {
    return res.status(500).json({ message: "server error" });
  }
};