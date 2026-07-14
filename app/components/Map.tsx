export default function Map() {
	const position: [number, number] = [44.8125, 20.4612];

	return (
		<div className="grayscale-50 w-full">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.82410360604!2d20.459758010062494!3d44.79393047095026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70126d8f007b%3A0x96b77e21cc5fbf10!2sITNMS!5e1!3m2!1sen!2srs!4v1779873268897!5m2!1sen!2srs"
				className="w-full aspect-square"
				loading="lazy"
			></iframe>
		</div>
	);
}
