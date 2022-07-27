import { Schema, model } from "mongoose";

const postsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
}
);

export default model("Posts", postsSchema);