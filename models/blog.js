import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    blogTitle : {
        type: String,
        required: true
    },
    blogDescription : {
        type: String,
        required: true
    },
    blogImage : {
        type: String
    }
});

export default mongoose.model("blogs", blogSchema);