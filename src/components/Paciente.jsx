export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
	const { id, nombre, propietario, email, alta, sintomas } = paciente;

	console.log(paciente);

	return (
		<div className="md:mx-5 mb-5 bg-white shadow-md px-5 py-8 rounded-xl">
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Nombre: <span className="font-normal normal-case">{nombre}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Nombre del propietario: <span className="font-normal normal-case">{propietario}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Email: <span className="font-normal normal-case">{email} </span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Fecha de alta: <span className="font-normal normal-case">{alta} </span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				Sintomas: <span className="font-normal normal-case">{sintomas} </span>
			</p>
			<div className="flex justify-end">
				<button
					className="py-2 px-6 mr-3 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
					onClick={() => {
						setPaciente(paciente);
					}}>
					<i className="fas fa-edit"></i>
				</button>
				<button
					className="py-2 px-6  text-white bg-red-500 rounded-lg hover:bg-red-600"
					onClick={() => {
						confirm("¿Desea eliminar al paciente ", nombre, "?") && eliminarPaciente(id);
					}}>
					<i className="fas fa-trash"></i>
				</button>
			</div>
		</div>
	);
};
