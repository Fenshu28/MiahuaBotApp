import AsistenciasModel from "../models/AsistenciasModel.js";
import AlumnosModel from "../models/AlumnosModel.js";
import HorariosModel from "../models/HorariosModel.js";

// Métodos para el CRUD

// Mostrar todos los registros
export const getAllAsistencias = async (req, res) => {
    try {
        const asistencias = await AsistenciasModel.findAll({
            include: [
                {
                    model: AlumnosModel,
                    attributes: ['matricula', 'nombre'] // Selecciona los campos que quieras incluir
                },
                {
                    model: HorariosModel,
                    attributes: ['idHorario', 'nombre'] // Selecciona los campos que quieras incluir
                }
            ]
        });
        res.json(asistencias);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Mostrar un registro
export const getAsistencia = async (req, res) => {
    try {
        const asistencia = await AsistenciasModel.findOne({
            where: {
                matricula: req.params.matricula,
                idHorario: req.params.idHorario
            },
            include: [
                {
                    model: AlumnosModel,
                    attributes: ['matricula', 'nombre'] // Selecciona los campos que quieras incluir
                },
                {
                    model: HorariosModel,
                    attributes: ['idHorario', 'descripcion'] // Selecciona los campos que quieras incluir
                }
            ]
        });
        res.json(asistencia);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Crear un registro
export const createAsistencia = async (req, res) => {
    try {
        await AsistenciasModel.create(req.body);
        res.json({
            "message": "¡Asistencia registrada correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Actualizar un registro
export const updateAsistencia = async (req, res) => {
    try {
        await AsistenciasModel.update(req.body, {
            where: {
                matricula: req.params.matricula,
                idHorario: req.params.idHorario
            }
        });
        res.json({
            "message": "¡Asistencia actualizada correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Eliminar un registro
export const deleteAsistencia = async (req, res) => {
    try {
        await AsistenciasModel.destroy({
            where: {
                matricula: req.params.matricula,
                idHorario: req.params.idHorario
            }
        });
        res.json({
            "message": "¡Asistencia eliminada correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};
