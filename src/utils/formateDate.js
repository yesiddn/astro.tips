export default function formateDate(date, withYear = false) {
	const event = new Date(date);
	const formattedDate = event.toLocaleDateString("es-CO", {
		year: withYear ? "numeric" : undefined,
		month: "long",
		day: "numeric",
	});

	return formattedDate;
}
