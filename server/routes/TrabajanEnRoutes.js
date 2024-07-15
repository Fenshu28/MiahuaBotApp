import express from "express";
import { createTrabajaEn, deleteTrabajaEn, getAllTrabajanEn, getTrabajaEn, updateTrabajaEn } from "../controller/TrabajanEnController.js";

const r = express.Router()

r.get('/',getAllTrabajanEn)
r.get('/:idM,:idH',getTrabajaEn)
r.post('/',createTrabajaEn)
r.put('/:idM,:idH',updateTrabajaEn)
r.delete('/:idM,:idH',deleteTrabajaEn)

export default r