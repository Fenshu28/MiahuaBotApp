import express from "express";
import { createAlumno, deleteAlumno, getAllAlmunos, getAlumno, updateAlumno } from "../controller/AlumnoController.js";

const router = express.Router()

router.get('/',getAllAlmunos)
router.get('/:id',getAlumno)
router.post('/',createAlumno)
router.put('/:id',updateAlumno)
router.delete('/:id',deleteAlumno)

export default router