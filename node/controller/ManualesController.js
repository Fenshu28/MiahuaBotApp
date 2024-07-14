import ManualesModel from "../models/ManualesModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllManuales = async (req, res) => {
    try {
        const Manuales = await ManualesModel.findAll()
        res.json(Manuales)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getManual = async (req, res) => {
    try {
        const manual = await ManualesModel.findAll({
            where: {
                idManual: req.params.id
            }
        })
        res.json(manual)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createManual = async (req, res) => {
    try {
        await ManualesModel.create(req.body)
        res.json({
            "message": "¡Manual registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateManual = async (req, res) => {
    try {
        await ManualesModel.update(req.body, {
            where: {
                idManual: req.params.id
            }
        })
        res.json({
            "message": "¡Manual actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteManual = async (req, res) => {
    try {
        await ManualesModel.destroy({
            where: {
                idManual: req.params.id
            }
        })
        res.json({
            "message": "¡Manual eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}