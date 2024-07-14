import express from "express";
import { createManual, deleteManual, getAllManuales, getManual, updateManual } from "../controller/ManualesController.js";

const r = express.Router()

r.get('/',getAllManuales)
r.get('/:id',getManual)
r.post('/',createManual)
r.put('/:id',updateManual)
r.delete('/:id',deleteManual)

export default r