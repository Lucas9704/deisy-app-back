import { Schema, model } from "mongoose";

const petsSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	approximate_age: {
		type: Number,
		required: true,
        trim: true,
	},
	image_url: {
		type: String,
		required: true,
	},
	adoption_status: {
		type: Boolean,
		required: true,
	},
    eat_food: {
        type: Date,
        default: Date.now,
    },
    approximate_ubication: {
        type: String,
        required: true,
    },
}, {
    versionKey: false,
    timestamp: true,
});

export default model("Pets", petsSchema);