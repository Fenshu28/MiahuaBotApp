import HorariosModel from "../models/HorariosModel.js";
import InstructoresModel from "../models/InstructoresModel.js";
import TrabajanEnModel from "../models/TrabajanEnModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllTrabajanEn = async (req, res) => {
    try {
        const TrabajanEn = await TrabajanEnModel.findAll({
            include: [
                {
                    model: InstructoresModel,
                    attributes: ['idInstructor', 'nombre'] // Selecciona los campos que quieras incluir
                }
            ],
            include: [
                {
                    model: HorariosModel,
                    attributes: ['idHorario', 'nombre'] // Selecciona los campos que quieras incluir
                }
            ]
        })
        res.json(TrabajanEn)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getTrabajaEn = async (req, res) => {
    try {
        const TrabajaEn = await TrabajanEnModel.findAll({
            where: {
                idHorario: req.params.idH,
                matricula: req.params.idM
            }
        })
        res.json(TrabajaEn)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createTrabajaEn = async (req, res) => {
    try {
        await TrabajanEnModel.create(req.body)
        res.json({
            "message": "¡TrabajaEn registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateTrabajaEn = async (req, res) => {
    try {
        await TrabajanEnModel.update(req.body, {
            where: {
                idHorario: req.params.idH,
                matricula: req.params.idM
            }
        })
        res.json({
            "message": "¡TrabajaEn actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteTrabajaEn = async (req, res) => {
    try {
        await TrabajanEnModel.destroy({
            where: {
                idHorario: req.params.idH,
                matricula: req.params.idM
            }
        })
        res.json({
            "message": "¡TrabajaEn eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}