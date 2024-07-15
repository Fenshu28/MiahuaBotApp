import express from "express";
import { createHorario, deleteHorario, getAllHorarios, getHorario, updateHorario } from "../controller/HorariosController.js";

const r = express.Router()

r.get('/',getAllHorarios)
r.get('/:id',getHorario)
r.post('/',createHorario)
r.put('/:id',updateHorario)
r.delete('/:id',deleteHorario)

export default r