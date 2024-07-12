import express from "express";
import { createPlan, deletePlan, getAllPlanes, getPlan, updatePlan } from "../controller/PlanController.js";

const router = express.Router()

router.get('/',getAllPlanes)
router.get('/:id',getPlan)
router.post('/',createPlan)
router.put('/:id',updatePlan)
router.delete('/:id',deletePlan)

export default router