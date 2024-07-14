import express from "express";
import { createArchivo, deleteArchivo, getAllArchivos, getArchivo, updateArchivo } from "../controller/ArchivosController.js";

const r = express.Router()

r.get('/',getAllArchivos())
r.get('/:id',getArchivo())
r.post('/',createArchivo())
r.put('/:id',updateArchivo())
r.delete('/:id',deleteArchivo())

export default r