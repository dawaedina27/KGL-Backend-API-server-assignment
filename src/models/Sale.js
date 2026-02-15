import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  saleType: { type: String, enum: ["cash", "credit"] },

  produceName: String,
  produceType: String,
  tonnage: Number,

  amountPaid: Number,
  amountDue: Number,

  buyerName: String,
  salesAgentName: String,

  date: String,
  time: String,

  nin: String,
  location: String,
  contact: String,
  dueDate: String,
  dispatchDate: String

}, { timestamps: true });

export default mongoose.model("Sale", saleSchema);
