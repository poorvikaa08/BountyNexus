import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
});

// Check if the model is already compiled, otherwise compile it
const log = mongoose.models.log || mongoose.model('log', loginSchema);

export default log;
