import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
});

const contactModel = mongoose.model("contactus", contactSchema);

export default contactModel;
