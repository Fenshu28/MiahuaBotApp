import express from "express";
import { createActividad, deleteActividad, getActividad, getAllActividades, updateActividad } from "../controller/ActividadesController.js";

const r = express.Router()

r.get('/',getAllActividades)
r.get('/:id',getActividad)
r.post('/',createActividad)
r.put('/:id',updateActividad)
r.delete('/:id',deleteActividad)

export default r