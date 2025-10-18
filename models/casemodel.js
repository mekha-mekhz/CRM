const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema(
  {
    customer_id: {type: mongoose.Schema.Types.ObjectId,required: true },
    assigned_to: {type: mongoose.Schema.Types.ObjectId,required: true },
    priority: {type: String,  enum: ["low", "medium", "high", "urgent"] },
    status: {type: String, enum: ["open", "in-progress", "resolved", "closed"] },
    subject: { type: String,required: true,},
    description: {type: String, required: true, },
    created_at: {type: Date,default: Date.now,
    },
    updated_at: {type: Date,default: Date.now,},
  },
)



const Case = mongoose.model("Case", caseSchema);
module.exports = Case;