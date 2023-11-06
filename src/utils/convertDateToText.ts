export function formatDate(dateString: string) {
	const date = new Date(dateString);
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const year = date.getUTCFullYear();
	return `${day} ${monthNames[month]} ${year}`;
}
const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
