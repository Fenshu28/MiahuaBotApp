import InstructoresModel from "../models/InstructoresModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllInstructores = async (req, res) => {
    try {
        const instructores = await InstructoresModel.findAll()
        res.json(instructores)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getInstructor = async (req, res) => {
    try {
        const instructor = await InstructoresModel.findAll({
            where: {
                idInstructor: req.params.id
            }
        })
        res.json(instructor)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createInstructor = async (req, res) => {
    try {
        await InstructoresModel.create(req.body)
        res.json({
            "message": "¡Instructor registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateInstructor = async (req, res) => {
    try {
        await InstructoresModel.update(req.body, {
            where: {
                idInstructor: req.params.id
            }
        })
        res.json({
            "message": "¡Instructor actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteInstructor = async (req, res) => {
    try {
        await InstructoresModel.destroy({
            where: {
                idInstructor: req.params.id
            }
        })
        res.json({
            "message": "¡Instructor eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}