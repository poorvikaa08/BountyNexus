import mongoose from "mongoose";

const bugsSchema = new mongoose.Schema({
    email: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    severity: { type: String, required: true },
});

// Check if the model is already compiled, otherwise compile it
const bugs = mongoose.models.Bugs || mongoose.model('Bugs', bugsSchema);

export default bugs;
