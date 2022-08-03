import Pet from "../models/Pets";
import { getPagination } from "../libs/getPagination";

const getPets = async (req, res) => {
	console.log("GET ALL /api/v1/pets");

	try {
		const { page, size, name} = req.query;

		const conditionName = name ? { 
			name: { $regex: new RegExp(name), $options: "i" }
		} : {};

		const {limit, offset} = getPagination(page, size);

		const data = await Pet.paginate( conditionName ,{ offset,limit });

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

	let pet = new Pet(req.body);

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

const getPetsByType = async (req, res) => {
	console.log("GET BY TYPE /api/v1/pets/type/:type");
	let type = req.params.type;

	try {
		const pets = await Pet.find({ type: type });

		if (!pets) {
			return res.status(404).send({ message: "No existen pets." });
		}

		res.status(200).send({ pets });
	} catch (err) {
		res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
	}
};

const getPetsByGender = async (req, res) => {
	console.log("GET BY Gender /api/v1/pets/gender/:gender");
	let gender = req.params.gender;

	try {
		const pets = await Pet.find({ gender: gender });

		if (!pets) {
			return res.status(404).send({ message: "No pets found." });
		}

		res.status(200).send({ pets });
	} catch (err) {
		return res
			.status(500)
			.send({ message: `Error al realizar la peticion: ${err}` });
	}
};

const getPetsAdoptable = async (req, res) => {
	console.log("GET ADOPTABLE /api/v1/pets/adoption");

	try {
		const pets = await Pet.find({ adoption_status: false });

		if (!pets) {
			return res.status(404).send({ message: "No pets found." });
		}

		res.status(200).send({ pets });
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
	getPetsByType,
	getPetsByGender,
	getPetsAdoptable,
};
