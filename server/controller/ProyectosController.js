import KitsModel from "../models/KitsModel.js";
import ProyectosModel from "../models/ProyectosModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllProyectos = async (req, res) => {
    try {
        const proyectos = await ProyectosModel.findAll({
            include: [
                {
                    model: KitsModel,
                    attributes: ['idKit', 'nombre'] // Selecciona los campos que quieras incluir
                }
            ]
        })
        res.json(proyectos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getProyecto = async (req, res) => {
    try {
        const proyecto = await ProyectosModel.findOne({
            where: {
                idProyecto: req.params.id
            },
            include: [
                {
                    model: KitsModel,
                    attributes: ['idKit', 'nombre'] // Selecciona los campos que quieras incluir
                }
            ]
        })
        res.json(proyecto)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createProyecto = async (req, res) => {
    try {
        await ProyectosModel.create(req.body)
        res.json({
            "message": "¡Proyecto registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateProyecto = async (req, res) => {
    try {
        await ProyectosModel.update(req.body, {
            where: {
                idProyecto: req.params.id
            }
        })
        res.json({
            "message": "¡Proyecto actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteProyecto = async (req, res) => {
    try {
        await ProyectosModel.destroy({
            where: {
                idProyecto: req.params.id
            }
        })
        res.json({
            "message": "¡Proyecto eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}