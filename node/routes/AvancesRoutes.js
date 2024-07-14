import express from "express";
import { createAvance, deleteAvance, getAllAvances, getAvance, updateAvance } from "../controller/AvancesController.js";

const r = express.Router()

r.get('/',getAllAvances)
r.get('/:id',getAvance)
r.post('/',createAvance)
r.put('/:id',updateAvance)
r.delete(':id',deleteAvance)

export default r