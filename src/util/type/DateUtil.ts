function to2digMMNumericYYYY(date: Date): string {
	return date.toLocaleDateString("en-US", {
		month: "2-digit",
		year: "numeric",
	});
}

export default { to2digMMNumericYYYY };
