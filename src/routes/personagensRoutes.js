import express from "express";
import {getAllPersonagens, getPersonagensById,createpersonagem, deletePersonagem, updatePersonagem} from "./../controllers/personagensController.js"

const router = express.Router();
router.get("/",getAllPersonagens);
router.get("/:id",getPersonagensById);
router.post("/",createpersonagem);
router.delete("/:id",deletePersonagem);
router.put("/:id",updatePersonagem);


export default router; 