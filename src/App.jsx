import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	function eliminarPaciente(id) {
		// Guardamos en un nuevo arreglo todos los elementos que no tengan el id pasado por argumento.
		const nuevoArregloDePacientes = pacientes.filter((elemento) => elemento.id !== id);
		console.log("El arreglo sin el paciente eliminado es ", nuevoArregloDePacientes);
		setPacientes(nuevoArregloDePacientes);
	}

	// Si hay algo en el localstorage traelo y setealo como State del arreglo de pacientes.
	useEffect(
		() =>
			localStorage.length > 0 ? setPacientes(JSON.parse(localStorage.getItem("Pacientes"))) : [],
		// Cuando no ponemos un valor dentro del arreglo este se ejecuta solo cuando el componente APP se carga
		[]
	);

	// Cada que haya un cambio en el arreglo de pacientes
	useEffect(() => localStorage.setItem("Pacientes", JSON.stringify(pacientes)), [pacientes]);

	return (
		<div className="container mx-auto">
			<Header />
			<div className="md:flex mt-10 md:mx-10">
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
}

export default App;
