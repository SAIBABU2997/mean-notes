import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, default: "Others" },
  color: { type: String, default: "#fff9c4" }, // light yellow default
}, { timestamps: true });

export default mongoose.model("Note", NoteSchema);
