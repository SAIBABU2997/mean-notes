const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Schema & Model (only once)
const NoteSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Note = mongoose.model("Note", NoteSchema);

// ✅ GET all notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST note
router.post("/", async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.json({ message: "Note added successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE note
router.delete("/:id", async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found!" });
    }

    res.json({ message: "Note deleted successfully!" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
