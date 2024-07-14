import express from "express";
import cors from 'cors'
import db from "./database/db.js";

import actividadesRoutes from './routes/ActividadesRoutes.js'
import alumnosRoutes from './routes/AlumnosRoutes.js'
import archivosRoutes from './routes/ArchivosRoutes.js'
import asistenciasRoutes from './routes/AsistenciasRoutes.js'
import avancesRoutes from './routes/AvancesRoutes.js'
import horariosRoutes from './routes/HorariosRoutes.js'
import instructoresRoutes from './routes/InstructoresRoutes.js'
import kitsRoutes from './routes/KitsRoutes.js'
import manualesRoutes from './routes/ManualesRoutes.js'
import pagosRoutes from './routes/PagosRoutes.js'
import planesRoutes from './routes/PlanesRoutes.js'
import proyectosRoutes from './routes/ProyectosRoutes.js'
import trabajanEnRoutes from './routes/TrabajaEnRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/alumnos',alumnosRoutes)
app.use('/actividades',actividadesRoutes)
app.use('/archivos',archivosRoutes)
app.use('/asistencias',asistenciasRoutes)
app.use('/avances',avancesRoutes)
app.use('/horarios',horariosRoutes)
app.use('/instructores',instructoresRoutes)
app.use('/kits',kitsRoutes)
app.use('/manuales',manualesRoutes)
app.use('/pagos',pagosRoutes)
app.use('/planes',planesRoutes)
app.use('/proyectos',proyectosRoutes)
app.use('/trabajaEn',trabajanEnRoutes)

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