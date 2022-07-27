import Post from "../models/Posts";

const getPosts = async (req, res) => {
	console.log("GET ALL /api/v1/posts");

	await Post.find({}, (err, posts) => {
		if (err)
			return res
				.status(500)
				.send({ message: `Error al realizar la peticion: ${err}` });
		if (!posts)
			return res.status(404).send({ message: "NO existen posts." });

		res.status(200).send({ posts });
	});
}

const getPost = async (req, res) => {
	console.log("GET BY ID /api/v1/posts/:id");
	let id = req.params.id;

	await Post.findById(id, (err, post) => {
		if (err)
			return res
				.status(500)
				.send({ message: "Error al realizar la peticion." });
		if (!post)
			return res.status(404).send({ message: "El post no existe." });

		res.status(200).send({ post });
	});
}

const addPost = async (req, res) => {
	console.log("POST /api/v1/posts");
	console.log(req.body);

	let post = new Post(req.body);

	await post.save();

	res.status(200).send({ post });
}

const updatePost = async (req, res) => {
	console.log("PUT /api/v1/posts/:id");
	console.log(req.body);

	let id = req.params.id;
	let update = req.body;

	await Post.findByIdAndUpdate(id, update, { new: true }, (err, postUpdate) => {
		if (err)
			return res
				.status(500)
				.send({ message: `Error al actualizar el post: ${err}` });

		res.status(200).send({ post: postUpdate });
	});
}

const deletePost = async(req, res) => {
	console.log("DELET /api/v1/posts/:id");
	let id = req.params.id;

	await Post.findById(id, (err, post) => {
		if (err)
			return res
				.status(500)
				.send({ message: `Error al borrar el post: ${err}` });

		post.remove((err) => {
			if (err)
				return res
					.status(500)
					.send({ message: `Error al borrar el post: ${err}` });
			res.status(200).send({ message: "El post a sido eliminado." });
		});
	});
}

export { 
	getPosts,
	getPost, 
	addPost, 
	updatePost, 
	deletePost 
};