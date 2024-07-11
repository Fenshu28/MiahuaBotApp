import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/alumnos/'

const CompShowAlumnos = () => {
    const [alumnos, setAlumnos] = useState([])
    useEffect(
        () => {
            getAlumnos()
        }, [])

    // procedimiento para mostrar todos los alumnos
    const getAlumnos = async () => {
        const res = await axios.get(URI)
        setAlumnos(res.data)
    }
    // procedimiento para eliminar un alumnos
    const deleteAlumnos = async (id) => {
        axios.delete(`${URI}${id}`)
        getAlumnos()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/nuevo-alumno" className='btn btn-primary'>Nuevo <i class="fa-solid fa-user-plus"/></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Matricula</th>
                                <th>Nombre</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map((alumno) => (
                                <tr key={alumno.matricula}>
                                    <td>{alumno.matricula}</td>
                                    <td>{alumno.nombre}</td>
                                    <td>
                                        <Link to={`/edit/${alumno.matricula}`} className='btn btn-info'>Editar <i class="fa-solid fa-user-pen"/></Link>
                                        <button onClick={() => deleteAlumnos(alumno.matricula)} className='btn btn-danger'>Eliminar <i class="fa-solid fa-user-large-slash"/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>)
}

export default CompShowAlumnos

// Minuto 8:00 del video 5.