import { Router } from "express";
import * as petsCtrl from "../../controllers/pets.controller";

const router = Router();

router
	// GET ALL
	.get("/pets", petsCtrl.getPets)
	// GET by id
	.get('/pets/:id', petsCtrl.getPet)
	// POST NEW
	.post("/pets", petsCtrl.addPet)
	// PUT by id
	.patch('/pets/:id', petsCtrl.updatePet)
	// DELETE by id
	.delete('/pets/:id', petsCtrl.deletePet);

export default router;