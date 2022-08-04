import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const petsSchema = new Schema(
	{
		id: {
			type: Number,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		gender: {
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
			trim: true,
		},
		adoption_status: {
			type: Boolean,
			default: true,
			required: true,
		},
		eat_food: {
			type: Date,
			default: Date.now,
		},
		approximate_location: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

petsSchema.plugin(mongoosePaginate);
export default model("Pets", petsSchema);
