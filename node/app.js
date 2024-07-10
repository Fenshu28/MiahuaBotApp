import express from "express";
import cors from 'cors'
import db from "./database/db.js";
import alumnoRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/alumnos',alumnoRoutes)

try {
    db.authenticate()
    console.log('conexión exitosa')
} catch (error) {
    console.log( `El error de conexión es: ${error}`)
}

app.get('/',(req,res)=>{
    res.send('Holaaa')
})

app.listen(8000,()=>{
    console.log('server up running at http://localhost:8000/!!')
})