import express from "express";
import { createProyecto, deleteProyecto, getAllProyectos, getProyecto, updateProyecto } from "../controller/ProyectosController.js";

const r = express.Router()

r.get('/',getAllProyectos())
r.get('/:id',getProyecto())
r.post('/',createProyecto())
r.put('/:id',updateProyecto())
r.delete('/:id',deleteProyecto())

export default r