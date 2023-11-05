import { getNames } from 'country-list';

function getCountryNames() {
	const important = ['Australia', 'Canada', 'New Zealand', 'South Africa', 'United Kingdom', 'USA'];
	return [...important, '---', ...getNames().filter(name => important.indexOf(name) < 0)];
}
export default getCountryNames();
