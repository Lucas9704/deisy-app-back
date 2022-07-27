import { Router } from "express";
import * as usersCtrl from "../../controllers/users.controller";

const router = Router();

router
	// GET ALL
	.get("/users", usersCtrl.getUsers)
	// GET by id
	.get("/users/:id", usersCtrl.getUser)
	// POST NEW
	.post("/users", usersCtrl.addUser)
	// PUT by id
	.patch("/users/:id", usersCtrl.updateUser)
	// DELETE by id
	.delete("/users/:id", usersCtrl.deleteUser);

export default router;