function capitalizeFirstLetter(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function range(start: string, end: string) {
	return [start, end].join(" - ");
}

export default { capitalizeFirstLetter, range };
