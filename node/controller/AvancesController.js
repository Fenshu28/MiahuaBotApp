import AvancesModel from "../models/AvancesModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllAvances = async (req, res) => {
    try {
        const avances = await AvancesModel.findAll()
        res.json(avances)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getAvance = async (req, res) => {
    try {
        const avance = await AvancesModel.findAll({
            where: {
                idAvance: req.params.id
            }
        })
        res.json(avance)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createAvance = async (req, res) => {
    try {
        await AvancesModel.create(req.body)
        res.json({
            "message": "¡Avance registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateAvance = async (req, res) => {
    try {
        await AvancesModel.update(req.body, {
            where: {
                idAvance: req.params.id
            }
        })
        res.json({
            "message": "¡Avance actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteAvance = async (req, res) => {
    try {
        await AvancesModel.destroy({
            where: {
                idAvance: req.params.id
            }
        })
        res.json({
            "message": "¡Avance eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}