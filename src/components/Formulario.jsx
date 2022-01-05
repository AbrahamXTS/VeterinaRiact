import { useState, useEffect } from "react";
import { Error } from "./Error";

export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
	const [nombre, setNombre] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");
	const [error, setError] = useState(false);

	// Paciente es el elemento seleccionado desde el botón de editar.
	useEffect(() => {
		// Si se clickea sobre el botón editar el state toma sobre la variable paciente ese elemento.
		if (Object.keys(paciente).length > 0) {
			setNombre(paciente.nombre);
			setPropietario(paciente.propietario);
			setEmail(paciente.email);
			setFecha(paciente.fecha);
			setSintomas(paciente.sintomas);
		}
	}, [paciente]);

	function handleFormSubmit(event) {
		event.preventDefault();
		if ([nombre, propietario, email, fecha, sintomas].includes("")) {
			setError(true);
		} else {
			setError(false);
			const objetoPaciente = { nombre, propietario, email, fecha, sintomas };

			if (paciente.id) {
				// Si existe un ID significa que estamos editando
				console.log("El paciente que está siendo modificado es: ", paciente);

				// El objetoPaciente que se crea al dar submit no tiene ID por lo que (al estar editando)
				// le asignamos el mismo ID que trae el original.
				objetoPaciente.id = paciente.id;

				console.log("El nuevo objeto que se va a guardar en el arreglo es: ", objetoPaciente);

				const nuevoArregloDePacientes = pacientes.map((elemento) =>
					elemento.id === paciente.id ? objetoPaciente : elemento
				);

				// Cambiamos el arreglo de pacientes original al arreglo generado con el elemento modificado.
				setPacientes(nuevoArregloDePacientes);
				// Limpiamos el paciente del state auxiliar.
				setPaciente({});
			} else {
				// Si no existe el id es un nuevo registro, por tanto le asignamos un ID
				objetoPaciente.id = generarID();
				setPacientes([...pacientes, objetoPaciente]);
			}
		}

		// Reiniciamos el formulario:
		setNombre("");
		setPropietario("");
		setEmail("");
		setFecha("");
		setSintomas("");
	}

	function generarID() {
		const p1 = Math.random().toString(36).substring(2);
		const p2 = Date.now().toString(36);
		return p1 + p2;
	}

	return (
		<div className="md:w-1/2 lg:w-2/5">
			<h2 className="font-black text-3xl text-center">Formulario</h2>
			<p className="text-lg text-center mt-5 mb-10">
				Añade Pacientes y<span className="text-indigo-600 font-bold"> Administralos</span>
			</p>
			<form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
				{error && <Error color={"bg-red-600"} texto={"Todos los campos son obligatorios"} />}
				<div className="mb-5">
					<label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
						Nombre Mascota
					</label>
					<input
						type="text"
						id="mascota"
						value={nombre}
						// Cuando el input cambie, utilizamos la función que cambia la variable y guardamos el valor.
						onChange={(event) => setNombre(event.target.value)}
						placeholder="Nombre de la mascota"
						className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
						Nombre Propietario
					</label>
					<input
						type="text"
						id="propietario"
						placeholder="Nombre del propietario"
						value={propietario}
						// Cuando el input cambie, utilizamos la función que cambia la variable y guardamos el valor.
						onChange={(event) => setPropietario(event.target.value)}
						className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="email" className="block text-gray-700 uppercase font-bold">
						Email
					</label>
					<input
						id="email"
						type="email"
						value={email}
						// Cuando el input cambie, utilizamos la función que cambia la variable y guardamos el valor.
						onChange={(event) => setEmail(event.target.value)}
						placeholder="Email de contacto"
						className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
						Alta
					</label>
					<input
						id="alta"
						type="date"
						value={fecha}
						// Cuando el input cambie, utilizamos la función que cambia la variable y guardamos el valor.
						onChange={(event) => setFecha(event.target.value)}
						className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
					/>
				</div>
				<div className="mb-5">
					<label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
						síntomas
					</label>
					<textarea
						id="sintomas"
						value={sintomas}
						// Cuando el input cambie, utilizamos la función que cambia la variable y guardamos el valor.
						onChange={(event) => setSintomas(event.target.value)}
						placeholder="Describe los síntomas"
						className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
					/>
				</div>
				<input
					type="submit"
					value={paciente.id ? "Editar registro" : "Agregar paciente"}
					className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
				/>
			</form>
		</div>
	);
}
