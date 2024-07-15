import logo from './logo.svg';
import './App.css';
import CompShowAlumnos from './Alumnos/ShowAlumnos';
import CompCreateAlumno from './Alumnos/CreateAlumnos';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompAtajos from './main-view/CompAtajos';
import HamburguerMenu from './main-view/HamburguerMenu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <HamburguerMenu/>
        </header>

        <Routes>
          <Route path='/' element={<CompAtajos />} />
          <Route path='/alumnos' element={<CompShowAlumnos />} />
          <Route path='/nuevo-alumno' element={<CompCreateAlumno />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
