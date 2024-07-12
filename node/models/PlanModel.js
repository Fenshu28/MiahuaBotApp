import db from "../database/db";
import { DataTypes } from "sequelize";

const PlanModel = db.define('Planes', {
    idPlan: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    precionombre: {
        type: DataTypes.DOUBLE
    },
    sesionesnombre: {
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
})

export default PlanModel