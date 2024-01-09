import StudentsItem from "./StudentsItem";
import "../css/List.css";

const List = ({ estudiante, setEstudiante, estudiantes, eliminarEstudiante }) => {
  console.log(estudiantes);
  return (
    <div className="list-container">
      {estudiantes.map((estudiante) => (
        <StudentsItem 
          key={estudiante.documento} 
          estudiante={estudiante} 
          eliminarEstudiante={eliminarEstudiante}
          setEstudiante={setEstudiante}
        />
      ))}
    </div>
  );
};

export default List;
