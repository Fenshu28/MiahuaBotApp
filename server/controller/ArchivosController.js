import ArchivosModel from "../models/ArchivosModel.js";
import AvancesModel from "../models/avancesModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllArchivos = async (req, res) => {
    try {
        const archivos = await ArchivosModel.findAll()
        res.json(archivos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getArchivo = async (req, res) => {
    try {
        const archivo = await ArchivosModel.findAll({
            where: {
                idArchivo: req.params.id
            }
        })
        res.json(archivo)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createArchivo = async (req, res) => {
    try {
        await ArchivosModel.create(req.body)
        res.json({
            "message": "¡Archivo registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updateArchivo = async (req, res) => {
    try {
        await ArchivosModel.update(req.body, {
            where: {
                idArchivo: req.params.id
            }
        })
        res.json({
            "message": "¡Archivo actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deleteArchivo = async (req, res) => {
    try {
        await ArchivosModel.destroy({
            where: {
                idArchivo: req.params.id
            }
        })
        res.json({
            "message": "¡Archivo eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}