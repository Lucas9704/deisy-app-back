import { Router } from "express";
import * as postsCtrl from "../../controllers/posts.controller.js";

const router = Router();

router
	// GET ALL
	.get("/posts", postsCtrl.getPosts)
	// GET by id
	.get('/posts/:id', postsCtrl.getPost)
	// POST NEW
	.post("/posts", postsCtrl.addPost)
	// PUT by id
	.patch('/posts/:id', postsCtrl.updatePost)
	// DELETE by id
	.delete('/posts/:id', postsCtrl.deletePost);

export default router;