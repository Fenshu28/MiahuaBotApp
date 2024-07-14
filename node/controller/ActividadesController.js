import ActividadesModel from "../models/ActividadesModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllActividades = async (req, res) => {
    try {
        const actividades = await ActividadesModel.findAll()
        res.json(actividades)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getActividad = async (req, res) => {
    try {
        const actividad = await ActividadesModel.findAll({
            where: {
                idActividad: req.params.id
            }
        })
        res.json(actividad)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createActividad = async (req, res) => {
    try {
        await ActividadesModel.create(req.body)
        res.json({
            "message": "¡Actividad registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateActividad = async (req, res) => {
    try {
        await ActividadesModel.update(req.body, {
            where: {
                idActividad: req.params.id
            }
        })
        res.json({
            "message": "¡Actividad actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteActividad = async (req, res) => {
    try {
        await ActividadesModel.destroy({
            where: {
                idActividad: req.params.id
            }
        })
        res.json({
            "message": "¡Actividad eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}