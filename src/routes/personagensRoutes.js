import express from "express";
import {getAllPersonagens, getPersonagensById,createpersonagem, deletePersonagem, updatePersonagem, getPersonagensPorCor} from "./../controllers/personagensController.js"

const router = express.Router();
router.get("/",getAllPersonagens);
router.get("/:id",getPersonagensById);
router.post("/",createpersonagem);
router.delete("/:id",deletePersonagem);
router.put("/:id",updatePersonagem);
router.get("/cor",getPersonagensPorCor);


export default router; 