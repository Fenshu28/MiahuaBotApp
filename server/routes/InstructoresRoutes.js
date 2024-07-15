import express from "express";
import { createInstructor, deleteInstructor, getAllInstructores, getInstructor, updateInstructor } from "../controller/InstructoresController.js";

const r = express.Router()

r.get('/',getAllInstructores)
r.get('/:id',getInstructor)
r.post('/',createInstructor)
r.put('/:id',updateInstructor)
r.delete('/:id',deleteInstructor)

export default r