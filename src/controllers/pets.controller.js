import Pet from "../models/Pets";
import { getPagination } from "../libs/getPagination";
import { get } from "mongoose";

const getPets = async (req, res) => {
	console.log("GET ALL /api/v1/pets");

	try {
		const { page, size, name} = req.query;

		const condition = name ? { 
			name: { $regex: new RegExp(name), $options: "i" }
		} : {};

		const {limit, offset} = getPagination(page, size);

		const data = await Pet.paginate(  condition  ,{ offset,limit });

		if (!data) {
			return res.status(404).send({ message: "No existen pets." });
		}

		res.status(200).send({ 
			data: data.docs,
			totalItems: data.totalDocs,
			totalPages: data.totalPages,
			currentPage: data.page - 1,
		});
	} catch (err) {
		res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
	}
};

const getPet = async (req, res) => {
	console.log("GET BY ID /api/v1/posts/:id");
	let id = req.params.id;

	try {
		const pet = await Pet.findById(id);

		if (!pet) {
			return res.status(404).send({ message: "El pet no existe." });
		}

		res.status(200).send({ pet });
	} catch (err) {
		res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
	}
};

const addPet = async (req, res) => {
	console.log("POST /api/v1/posts");
	console.log(req.body);
	const id = await Pet.countDocuments();

	let pet = new Pet({
		id: id + 10,
		name: req.body.name,
		type: req.body.type,
		gender: req.body.gender,
		description: req.body.description,
		approximate_age: req.body.approximate_age,
		image_url: req.body.image_url,
		adoption_status: req.body.adoption_status,
		approximate_location: req.body.approximate_location
	});

	try {
		await pet.save();
		res.status(200).send({ pet });
	} catch (err) {
		res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
	}
};

const updatePet = async (req, res) => {
	console.log("PUT /api/v1/posts/:id");
	console.log(req.body);

	let id = req.params.id;
	let update = req.body;

	try {
		const pet = await Pet.findByIdAndUpdate(id, update, { new: true });

		if (!pet) {
			return res.status(404).send({ message: "El pet no existe." });
		}

		res.status(200).send({ pet });
	} catch (err) {
		res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
	}
};

const deletePet = async (req, res) => {
	console.log("DELET /api/v1/posts/:id");
	let id = req.params.id;

	try {
		const pet = await Pet.findById(id);

		if (!pet) {
			return res.status(404).send({ message: "El pet no existe." });
		}

		res.status(200).send({ pet });
	} catch (err) {
		res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
	}
};

const getPetsAdoptable = async (req, res) => {
	console.log("GET ADOPTABLE /api/v1/pets/adoption");

	try {
		const { page, size, adoption} = req.query;

		const condition = adoption ? {
			adoption_status: adoption
		} : {};

		const {limit, offset} = getPagination(page, size);

		const data = await Pet.paginate(  condition  ,{ offset,limit });

		if (!data) {
			return res.status(404).send({ message: "No existen pets." });
		}

		res.status(200).send({ 
			data: data.docs,
			totalItems: data.totalDocs,
			totalPages: data.totalPages,
			currentPage: data.page - 1,
		});
	} catch (err) {
		return res
			.status(500)
			.send({ message: `Error al realizar la peticion: ${err}` });
	}
};

export {
	getPets,
	getPet,
	addPet,
	updatePet,
	deletePet,
	getPetsAdoptable
};
