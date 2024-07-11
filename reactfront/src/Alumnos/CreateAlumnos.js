import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/alumnos/'

const CompCreateAlumno = () => {
    const [matricula, setMatricula] = useState('')
    const [nombre, setNombre] = useState('')
    const [fechaNac, setFechaNac] = useState('')
    const [fechaIngreso, setFechaIngreso] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [urlFoto, setUrlFoto] = useState('')
    const [idPlan, setIdPlan] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            nombre: nombre,
            fechaNac: fechaNac,
            fechaIngreso: fechaIngreso,
            matricula: matricula,
            telefono: telefono,
            correo: correo,
            urlFoto: urlFoto,
            idPlan: idPlan
        })
        navigate('/')
    }

    return (
        <div>
            <h3>Nuevo alumno</h3>
            <form onSubmit={store}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-5 ">
                            <label className="form-label" >Matricula</label>
                            <div className="row ">
                                <div className="col-10">
                                    <input
                                        value={matricula}
                                        onChange={(e) => setMatricula(e.target.value)}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-1">
                                    <button className="btn btn-secondary">Generar</button>
                                </div>
                            </div>
                            <label className="form-label" >Nombre</label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                type="text"
                                className="form-control"
                            />
                            <label className="form-label" >Fecha de nacimiento</label>
                            <input
                                value={fechaNac}
                                onChange={(e) => setFechaNac(e.target.value)}
                                type="date"
                                className="form-control"
                            />
                            <label className="form-label" >Fecha de ingreso</label>
                            <input
                                value={fechaIngreso}
                                onChange={(e) => setFechaIngreso(e.target.value)}
                                type="date"
                                className="form-control"
                            />
                            <label className="form-label" >Teléfono</label>
                            <input
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                type="phone"
                                className="form-control"
                            />
                            <label className="form-label" >Teléfono</label>
                            <input
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                type="phone"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CompCreateAlumno