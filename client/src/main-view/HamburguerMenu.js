import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Button, Nav, DropdownButton, Dropdown } from 'react-bootstrap';

function HamburgerMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        ☰
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DropdownButton
            variant="secondary"
            title="Dropdown button"
            className="mt-3"
          >
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </DropdownButton>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/alumnos">Alumnos</Nav.Link>
            <Nav.Link as={Link} to="/actividades-del-dia">Actividades del día</Nav.Link>
            <Nav.Link as={Link} to="/avance-del-alumno">Avance del alumno</Nav.Link>
            <Nav.Link as={Link} to="/tomar-asistencia">Tomar asistencia</Nav.Link>
            <Nav.Link as={Link} to="/registros">Registros</Nav.Link>
            <Nav.Link as={Link} to="/kits">Kits</Nav.Link>
            <Nav.Link as={Link} to="/proyectos">Proyectos</Nav.Link>
            <Nav.Link as={Link} to="/registrar">Registrar</Nav.Link>
            <Nav.Link as={Link} to="/registros-pagos">Registros</Nav.Link>
            <Nav.Link as={Link} to="/pagos-pendientes">Pagos pendientes</Nav.Link>
            <Nav.Link as={Link} to="/planes-y-horarios">Planes y horarios</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HamburgerMenu;
