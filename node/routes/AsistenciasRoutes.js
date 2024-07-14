import express from "express";
import { createAsistencia, deleteAsistencia, getAllAsistencias, getAsistencia, updateAsistencia } from "../controller/AsistenciasController.js";

const r = express.Router()

r.get('/',getAllAsistencias)
r.get('/:idM,:idH',getAsistencia)
r.post('/',createAsistencia)
r.put('/:idM,:idH',updateAsistencia)
r.delete('/:idM,:idH',deleteAsistencia)

export default r