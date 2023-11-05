export function formatDate(dateString: string) {
	const date = new Date(dateString);
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();
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
