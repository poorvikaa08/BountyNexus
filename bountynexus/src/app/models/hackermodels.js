import mongoose from "mongoose";

const HackerSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Check if the model is already compiled, otherwise compile it
const Hacker = mongoose.models.Hacker || mongoose.model('Hacker', HackerSchema);

export default Hacker;
