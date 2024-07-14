import PagosModel from "../models/PagosModel.js";

// Métodos para el crud

// Mostrar todos los registros
export const getAllPagos = async (req, res) => {
    try {
        const pagos = await PagosModel.findAll()
        res.json(pagos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Mostrar un registro
export const getPago = async (req, res) => {
    try {
        const pago = await PagosModel.findAll({
            where: {
                folio: req.params.id
            }
        })
        res.json(pago)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro
export const createPago = async (req, res) => {
    try {
        await PagosModel.create(req.body)
        res.json({
            "message": "¡Pago registrado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Actualizar un registro
export const updatePago = async (req, res) => {
    try {
        await PagosModel.update(req.body, {
            where: {
                folio: req.params.id
            }
        })
        res.json({
            "message": "¡Pago actualizado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Eliminar un registro
export const deletePago = async (req, res) => {
    try {
        await PagosModel.destroy({
            where: {
                folio: req.params.id
            }
        })
        res.json({
            "message": "¡Pago eliminado correctamente!"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}