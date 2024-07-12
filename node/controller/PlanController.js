import PlanesModel from "../models/PlanesModelo.js"

export const getAllPlanes = async (req, res) => {
    try {
        const planes = await PlanesModel.findAll()
        res.json(planes)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getPlan = async (req, res) => {
    try {
        const plan = await PlanesModel.findAll({
            where: {
                idPlan: req.params.id
            }
        })
        res.json(plan)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createPlan = async (req, res) => {
    try {
        await PlanesModel.create(req.body)
        res.json({
            "message": "¡Plan registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updatePlan = async (req, res) => {
    try {
        await PlanesModel.update(req.body, {
            where: {
                idPlan: req.params.id
            }
        })
        res.json({
            "message": "¡Plan actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deletePlan = async (req, res) => {
    try {
        await PlanesModel.destroy({
            where: {
                idPlan: req.params.id
            }
        })
        res.json({
            "message": "¡Alumno eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}