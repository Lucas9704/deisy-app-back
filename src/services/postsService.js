import Post from "../models/Posts";

const getPosts = () => { 
	console.log("GET ALL /api/v1/posts");

	Post.find({}, (err, posts) => {
		if (err)
			return res
				.status(500)
				.send({ message: `Error al realizar la peticion: ${err}` });
		if (!posts)
			return res.status(404).send({ message: "NO existen posts." });

        return posts;
	});; 
};

const getPost = () => { 
    console.log("GET BY ID /api/v1/posts/:id");
	let id = req.params.id;

	Post.findById(id, (err, post) => {
		if (err)
			return res
				.status(500)
				.send({ message: "Error al realizar la peticion." });
		if (!post)
			return res.status(404).send({ message: "El post no existe." });

        return post;
	});
}; 

const addPost = () => { 
    return; 
}; 
const updatePost = () => { 
    return; 
}; 
const deletePost = () => { 
    return; 
};

export { getPosts, getPost, addPost, updatePost, deletePost };