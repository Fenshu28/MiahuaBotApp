import KitsModel from "../models/KitsModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllKits = async (req, res) => {
    try {
        const kits = await KitsModel.findAll()
        res.json(kits)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getKit = async (req, res) => {
    try {
        const kit = await KitsModel.findAll({
            where: {
                idKit: req.params.id
            }
        })
        res.json(kit)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createKit = async (req, res) => {
    try {
        await KitsModel.create(req.body)
        res.json({
            "message": "¡Kit registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateKit = async (req, res) => {
    try {
        await KitsModel.update(req.body, {
            where: {
                idKit: req.params.id
            }
        })
        res.json({
            "message": "¡Kit actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteKit = async (req, res) => {
    try {
        await KitsModel.destroy({
            where: {
                idKit: req.params.id
            }
        })
        res.json({
            "message": "¡Kit eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}