export const Error = ({ texto, color }) => {
	return (
		<div className={`${color} w-full mb-5 rounded-md`}>
			<p className="text-center text-white py-2.5 font-bold ">{texto}</p>
		</div>
	);
};
