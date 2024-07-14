import HorariosModel from "../models/HorariosModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllHorarios = async (req, res) => {
    try {
        const horarios = await HorariosModel.findAll()
        res.json(horarios)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getHorario = async (req, res) => {
    try {
        const horario = await HorariosModel.findAll({
            where: {
                idHorario: req.params.id
            }
        })
        res.json(horario)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createHorario = async (req, res) => {
    try {
        await HorariosModel.create(req.body)
        res.json({
            "message": "¡Horario registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateHorario = async (req, res) => {
    try {
        await HorariosModel.update(req.body, {
            where: {
                idHorario: req.params.id
            }
        })
        res.json({
            "message": "¡Horario actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteHorario = async (req, res) => {
    try {
        await HorariosModel.destroy({
            where: {
                idHorario: req.params.id
            }
        })
        res.json({
            "message": "¡Horario eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}