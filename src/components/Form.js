import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/Form.css";

const Form = ({ estudiante, estudiantes, setEstudiantes, setEstudiante }) => {
  //Inicialización inputs
  const [documento, setDocumento] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    const { v4: uuidv4 } = require("uuid");
    let id = uuidv4();
    //Guardar estudiante en localStorage
    const nuevoEstudiante = {
      id,
      documento,
      nombres,
      apellidos,
      telefono,
      correo,
    };

    if (estudiante.id) {
      nuevoEstudiante.id = estudiante.id;
      const otros = estudiantes.map((estudianteItem) =>
        estudianteItem.id === estudiante.id ? nuevoEstudiante:estudianteItem
      );
      if (window.confirm("¿Desea realizar los cambios en el estudiante?")) {
        setEstudiantes(otros);
        setEstudiante({});
      }
    } else {
      setEstudiantes([...estudiantes, nuevoEstudiante]);
    }
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setDocumento("");
    setNombres("");
    setApellidos("");
    setTelefono("");
    setCorreo("");
    setEstudiante({})
  };

  useEffect(() => {
    if (estudiante.id && estudiante.id !== "") {
      setDocumento(estudiante.documento);
      setNombres(estudiante.nombres);
      setApellidos(estudiante.apellidos);
      setTelefono(estudiante.telefono);
      setCorreo(estudiante.correo);
    }
  }, [estudiante]);

  return (
    <form className="form-container" onSubmit={enviarFormulario}>
      <input
        type="number"
        placeholder="Número de documento"
        value={documento}
        onChange={(e) => setDocumento(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nombre completo"
        value={nombres}
        onChange={(e) => setNombres(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Apellidos"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
      />
      <button type="submit">{estudiante.id ? 'Editar' : 'Registrar' }</button>
    </form>
  );
};

export default Form;
