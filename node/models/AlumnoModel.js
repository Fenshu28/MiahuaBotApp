//importamos la conexión
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const AlumnoModel = db.define('Alumnos', {
    matricula: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
}, {
    timestamps: false // Deshabilitamos los timestamps
})

export default AlumnoModel