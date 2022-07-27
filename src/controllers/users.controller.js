import User from '../models/Users';

const getUsers = async (req, res) => {
	console.log("GET ALL /api/v1/pets");

    try {
        const users = await User.find();

        if (!users) {
            return res.status(404).send({ message: "No existen users." });
        }

        res.status(200).send({ users });
    }
    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

const getUser = async (req, res) => {
	console.log("GET BY ID /api/v1/posts/:id");
    let id = req.params.id;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send({ message: "El user no existe." });
        }

        res.status(200).send({ user });
    }

    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

const addUser = async (req, res) => {
	console.log("POST /api/v1/posts");
	console.log(req.body);

    let user = new User(req.body);

    try {
        await user.save();
        res.status(200).send({ user });
    }
    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

const updateUser = async (req, res) => {
	console.log("PUT /api/v1/posts/:id");
	console.log(req.body);

	let id = req.params.id;
	let update = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, update, { new: true });

        if (!user) {
            return res.status(404).send({ message: "El user no existe." });
        }

        res.status(200).send({ user });
    }
    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

const deleteUser = async(req, res) => {
	console.log("DELET /api/v1/posts/:id");
	let id = req.params.id;

    try {
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).send({ message: "El user no existe." });
        }

        await user.remove();
        res.status(200).send({ message: "El user ha sido eliminado." });
    }
    catch (err) {
        res.status(500).send({ message: `Error al realizar la peticion: ${err}` });
    }
}

export { 
	getUsers,
	getUser, 
	addUser, 
	updateUser, 
	deleteUser 
};