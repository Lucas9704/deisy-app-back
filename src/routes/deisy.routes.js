import {Router} from "express"
import Pets from "../models/Pets"

const router = Router()

router.get('/pets', (req, res) => { 
    res.send('pets')
})

router.post('/pets', async (req, res) => {
    const newPets = new Pets(req.body);
    await newPets.save();
    console.log(newPets);
    res.json('saving a new pet');
})

export default router;