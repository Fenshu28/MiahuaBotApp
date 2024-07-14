import express from "express";
import { createKit, deleteKit, getAllKits, getKit, updateKit } from "../controller/KitsController.js";

const r = express.Router()

r.get('/',getAllKits())
r.get('/:id',getKit())
r.post('/',createKit())
r.put('/:id',updateKit())
r.delete('/:id',deleteKit())

export default r



