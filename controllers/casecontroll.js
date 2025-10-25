const Case = require("../models/casemodel");

// ✅ Create 
exports.createcase = async (req, res) => {
  const { customer_id, assigned_to, priority, status, subject, description } = req.body;

  if (!customer_id || !assigned_to || !subject || !description) {
    return res.status(400).json({ message: "All required fields must be provided" });
  }

  try {
    const newCase = new Case({
      customer_id,
      assigned_to,
      priority,
      status,
      subject,
      description,
    });

    await newCase.save();
    return res.status(201).json({ message: "Case created successfully", case: newCase });
  } catch (err) {
    return res.status(500).json({ message: `Server error: ${err.message}` });
  }
};

// ✅ Get all cases
exports.getcase = async (req, res) => {
  try {
    const cases = await Case.find();
    return res.status(200).json({ message: "Success", data: cases });
  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// ✅ Update case 
exports.updatecase = async (req, res) => {
  try {
    const { id } = req.params;
    const { customer_id, assigned_to, priority, status, subject, description } = req.body;

    const updatedCase = await Case.findByIdAndUpdate(
      id,
      { customer_id, assigned_to, priority, status, subject, description },
      { new: true }
    );

    if (!updatedCase)
      return res.status(404).json({ message: "Case not found" });

    return res.status(200).json({ message: "Case updated successfully", data: updatedCase });
  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

// ✅ Delete
exports.deletecase = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCase = await Case.findByIdAndDelete(id);

    if (!deletedCase)
      return res.status(404).json({ message: "Case not found" });

    return res.status(200).json({ message: "Case deleted successfully", data: deletedCase });
  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
};
