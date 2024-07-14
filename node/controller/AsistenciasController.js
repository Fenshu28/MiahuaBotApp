import AsistenciasModel from "../models/AsistenciasModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllAsistencias = async (req, res) => {
    try {
        const asistencias = await AsistenciasModel.findAll()
        res.json(asistencias)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getAsistencia = async (req, res) => {
    try {
        const asistencia = await AsistenciasModel.findAll({
            where: {
                idHorario: req.params.idH,
                matricula: req.params.idM
            }
        })
        res.json(asistencia)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createAsistencia = async (req, res) => {
    try {
        await AsistenciasModel.create(req.body)
        res.json({
            "message": "¡Asistencia registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateAsistencia = async (req, res) => {
    try {
        await AsistenciasModel.update(req.body, {
            where: {
                idHorario: req.params.idH,
                matricula: req.params.idM
            }
        })
        res.json({
            "message": "¡Asistencia actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteAsistencia = async (req, res) => {
    try {
        await AsistenciasModel.destroy({
            where: {
                idHorario: req.params.idH,
                matricula: req.params.idM
            }
        })
        res.json({
            "message": "¡Asistencia eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}