import AlumnosModel from "../models/AlumnosModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllAlumnos = async (req, res) => {
    try {
        const alumnos = await AlumnosModel.findAll()
        res.json(alumnos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getAlumno = async (req, res) => {
    try {
        const alumno = await AlumnosModel.findAll({
            where: {
                matricula: req.params.id
            }
        })
        res.json(alumno)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createAlumno = async (req, res) => {
    try {
        await AlumnosModel.create(req.body)
        res.json({
            "message": "¡Alumno registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateAlumno = async (req, res) => {
    try {
        await AlumnosModel.update(req.body, {
            where: {
                matricula: req.params.id
            }
        })
        res.json({
            "message": "¡Alumno actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteAlumno = async (req, res) => {
    try {
        await AlumnosModel.destroy({
            where: {
                matricula: req.params.id
            }
        })
        res.json({
            "message": "¡Alumno eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}