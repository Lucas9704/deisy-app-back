import Pet from "../models/Pets";

const getPets = async (req, res) => {
	console.log("GET ALL /api/v1/pets");

    try {
        const pets = await Pet.find();

        if (!pets) {
            return res.status(404).send({ message: "No existen pets." });
        }

        res.status(200).send({ pets });
    }
    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

const getPet = async (req, res) => {
	console.log("GET BY ID /api/v1/posts/:id");
	let id = req.params.id;

    try {
        const pet = await Pet.findById(id);

        if (!pet) {
            return res.status(404).send({ message: "El pet no existe." });
        }

        res.status(200).send({ pet });
    }
    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

const addPet = async (req, res) => {
	console.log("POST /api/v1/posts");
	console.log(req.body);

    let pet = new Pet(req.body);

    try {
        await pet.save();
        res.status(200).send({ pet });
    }
    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

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
    }
    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

const deletePet = async(req, res) => {
	console.log("DELET /api/v1/posts/:id");
	let id = req.params.id;

    try {
        const pet = await Pet.findById(id);

        if (!pet) {
            return res.status(404).send({ message: "El pet no existe." });
        }

        res.status(200).send({ pet });
    }
    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

export { 
	getPets,
	getPet, 
	addPet, 
	updatePet, 
	deletePet 
};