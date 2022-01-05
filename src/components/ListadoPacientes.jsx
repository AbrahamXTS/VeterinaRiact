import { Paciente } from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
	return (
		<div className="md:w-1/2 lg:w-3/5 ">
			{pacientes.length === 0 ? (
				<>
					<h2 className="font-black text-3xl text-center">No hay pacientes</h2>
					<p className="text-xl mt-5 mb-10 text-center">
						Comienza agregando pacientes
						<span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
					</p>
				</>
			) : (
				<>
					<h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
					<p className="text-xl mt-5 mb-10 text-center">
						Administra tus<span className="text-indigo-600 font-bold"> pacientes y citas</span>
					</p>
					<div className="md:h-screen overflow-y-scroll">
						{pacientes.map((paciente) => (
							<Paciente
								key={paciente.id}
								paciente={paciente}
								setPaciente={setPaciente}
								eliminarPaciente={eliminarPaciente}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default ListadoPacientes;
