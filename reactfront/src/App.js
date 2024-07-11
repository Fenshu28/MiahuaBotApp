import logo from './logo.svg';
import './App.css';
import CompShowAlumnos from './Alumnos/ShowAlumnos';
import CompCreateAlumno from './Alumnos/CreateAlumnos';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowAlumnos/>} />
          <Route path='/nuevo-alumno' element={<CompCreateAlumno/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
