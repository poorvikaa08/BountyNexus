import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// Check if the model is already compiled, otherwise compile it
const CompData = mongoose.models.CompanyData || mongoose.model('CompanyData', CompanySchema);

export default CompData;
