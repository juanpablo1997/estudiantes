import "../css/StudentsItem.css";

const StudentsItem = ({estudiante, setEstudiante, eliminarEstudiante}) => {
  const {id, documento, nombres, apellidos, telefono, correo} = estudiante;
  return (
    <div className="students-card">
        <p className="ficha"><span>Número de ficha: {id}</span></p>
        <p><span>ID:</span> {documento}</p>
        <p><span>Nombre completo:</span> {nombres} {apellidos}</p>
        <p><span>Teléfono:</span> {telefono}</p>
        <p><span>Correo:</span> {correo}</p>
        <div>
          <button className="editar-button" onClick={() => setEstudiante(estudiante)}>Editar</button>
          <button className="eliminar-button" onClick={() => eliminarEstudiante(id)}>Eliminar</button>
        </div>
    </div>
  )
}

export default StudentsItem;