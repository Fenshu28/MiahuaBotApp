import axios from 'axios'
import { useState, useEffect } from 'react'
import { link } from 'react-router-dom'

const uri = 'http://localhost:8000/alumnos/'

const CompShowAlumnos = () => {
    const [alumnos, setAlumnos] = useState([])
    useEffect(
        () => {
            getAlumnos()
        }, []
    )

    // procedimiento para mostrar todos los alumnos
    const getAlumnos = async () => {
       const res = await axios.get(uri)
       setAlumnos(res.data)
    }
    // procedimiento para eliminar un alumnos
    const deleteAlumnos = async (id) => {

    }
    // procedimiento para editar un alumnos
    const updateAlumnos = async (id) => {

    }

    return (<div>

    </div>)
}

export default CompShowAlumnos

// Minuto 8:00 del video 5.