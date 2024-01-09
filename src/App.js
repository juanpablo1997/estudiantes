import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./css/App.css";

const App = () => {
  const [estudiante, setEstudiante] = useState({});
  const [estudiantes, setEstudiantes] = useState(JSON.parse(localStorage.getItem('estudiantes')) ?? []);

  useEffect(() => {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
  }, [estudiantes])

  const eliminarEstudiante = (id) => {
    if (window.confirm("¿Desea eliminar el estudiante?")) {
      const nuevosEstudiantes = estudiantes.filter(estudiante => estudiante.id !== id);
      setEstudiantes(nuevosEstudiantes);
    }
  }

  return (
    <div className="grid-container">
      <div className='header'>APP ESTUDIANTES</div>
      <div className='form'>
        <p className="titulo">Formulario de registro</p>
        <Form 
          estudiante={estudiante} 
          estudiantes={estudiantes}
          setEstudiantes={setEstudiantes}
          setEstudiante={setEstudiante}
        />
      </div>
      <div className='list'>
        <p className="titulo">Lista de estudiantes registrados</p>
        <List 
          estudiante={estudiante} 
          estudiantes={estudiantes} 
          eliminarEstudiante={eliminarEstudiante}
          setEstudiante={setEstudiante}
        />
      </div>
    </div>
  )
}

export default App;