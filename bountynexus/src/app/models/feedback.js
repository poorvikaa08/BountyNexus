import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
});

// Check if the model is already compiled, otherwise compile it
const feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);

export default feedback;
