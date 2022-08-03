import { Router } from "express";
import * as petsCtrl from "../../controllers/pets.controller";

const router = Router();

router
	// GET ALL
	.get("/pets", petsCtrl.getPets)
	// GET by adoption status
	.get('/pets/adoption', petsCtrl.getPetsAdoptable)
	// GET by id
	.get('/pets/:id', petsCtrl.getPet)
	// POST NEW
	.post("/pets", petsCtrl.addPet)
	// PUT by id
	.put('/pets/:id', petsCtrl.updatePet)
	// DELETE by id
	.delete('/pets/:id', petsCtrl.deletePet)
	// GET by type
	.get('/pets/type/:type', petsCtrl.getPetsByType)
	// GET by gender
	.get('/pets/gender/:gender', petsCtrl.getPetsByGender);

export default router;