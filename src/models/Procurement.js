import mongoose from "mongoose";

const procurementSchema = new mongoose.Schema({
  produceName: String,
  produceType: String,
  date: String,
  time: String,
  tonnage: Number,
  cost: Number,
  dealerName: String,
  branch: { type: String, enum: ["Maganjo", "Matugga"] },
  contact: String,
  sellingPrice: Number
}, { timestamps: true });

export default mongoose.model("Procurement", procurementSchema);
