import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    emailID: String
});

const userModel = mongoose.models.users || mongoose.model("user", userSchema);

export default userModel;