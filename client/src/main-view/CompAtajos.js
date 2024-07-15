import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompAtajos.css';

const CompAtajos = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-success">Hola usuario</h2>
            <div className="list-group">
                <Link to="/nuevo-alumno" className="list-group-item list-group-item-action d-flex align-items-center">
                    <div className="icon-container bg-white rounded-circle p-2 mr-3">
                        <i className="fas fa-user-plus text-success"></i>
                    </div>
                    <span>Nuevo alumno</span>
                </Link>
                <Link to="/pase-lista" className="list-group-item list-group-item-action d-flex align-items-center mt-2">
                    <div className="icon-container bg-white rounded-circle p-2 mr-3">
                        <i className="fas fa-clipboard-list text-success"></i>
                    </div>
                    <span>Pase de lista</span>
                </Link>
                <Link to="/registrar-avance" className="list-group-item list-group-item-action d-flex align-items-center mt-2">
                    <div className="icon-container bg-white rounded-circle p-2 mr-3">
                        <i className="fas fa-briefcase text-success"></i>
                    </div>
                    <span>Registrar avance</span>
                </Link>
                <Link to="/registrar-pago" className="list-group-item list-group-item-action d-flex align-items-center mt-2">
                    <div className="icon-container bg-white rounded-circle p-2 mr-3">
                        <i className="fas fa-money-bill-wave text-success"></i>
                    </div>
                    <span>Registrar un pago</span>
                </Link>
            </div>
        </div>
    );
}

export default CompAtajos;
