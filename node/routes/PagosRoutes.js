import express from "express";
import { createPago, deletePago, getAllPagos, getPago, updatePago } from "../controller/PagosController.js";

const r = express.Router()

r.get('/',getAllPagos)
r.get('/:id',getPago)
r.post('/',createPago)
r.put('/:id',updatePago)
r.delete('/:id',deletePago)

export default r