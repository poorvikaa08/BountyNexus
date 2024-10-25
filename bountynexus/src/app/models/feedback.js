import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
});

// Check if the model is already compiled, otherwise compile it
const feedback = mongoose.models.Hacker || mongoose.model('Hacker', HackerSchema);

export default feedback;
