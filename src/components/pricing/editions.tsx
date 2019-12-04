import * as React from 'react';
import { Link } from 'gatsby';

import { getTier } from './features';

function btnClasses(is: boolean) {
	return `btn btn-block ${is ? `btn-primary` : `btn-outline-secondary`}`;
}
function sectionClasses(is: boolean) {
	return `col-md edition ${is ? `recommend` : ``}`;
}

const Editions: React.FC<{ value?: number }> = ({ value }) => {
	const people = value || 500;
	const tier = getTier(people);
	const signUpUrl = `/sign-up/?size=${people}&edition=`;
	return (
		<div className='row'>
			<section className={sectionClasses(tier === 'essentials')}>
				<Recommend is={tier === 'essentials'} />
				<header>
					<h3>Essentials</h3>
					<p>For new churches and churches wanting to track attendance and start growing each person.</p>
					<PriceEstimate base={99} people={people} step={100} stepPrice={10} />
				</header>
				<div>
					<br />
				</div>
				<ul>
					<li>People & Households</li>
					<li>Secure notes</li>
					<li>Custom fields</li>
					<li>Groups & Attendance</li>
					<li>Personalized Bulk Email</li>
					<li>Personalized Bulk SMS add-on</li>
					<li>Follow-up tasks</li>
					<li>Email support</li>
				</ul>
				<footer>
					<Link to={signUpUrl + 'essentials'} className={btnClasses(tier === 'essentials')} role='button'>
						Get started for free
					</Link>
				</footer>
			</section>
			<section className={sectionClasses(tier === 'growth')}>
				<Recommend is={tier === 'growth'} isDefault={!value} />
				<header>
					<h3>Growth</h3>
					<p>For growing churches focused on child safety, outreach and wanting follow-up automation.</p>
					<PriceEstimate base={199} people={people} step={100} stepPrice={20} />
				</header>
				<div>Essentials, plus...</div>
				<ul>
					<li>Check-in & Child Safety</li>
					<li>Event registrations</li>
					<li>Forms & Processes</li>
					<li>Giving & Finances</li>
					<li>Stores</li>
					<li>Basic church metrics</li>
					<li>Up to 5 campuses</li>
					<li>Monthly webinars</li>
				</ul>
				<footer>
					<Link to={signUpUrl + 'growth'} className={btnClasses(tier === 'growth')} role='button'>
						Get started for free
					</Link>
				</footer>
			</section>
			<section className={sectionClasses(tier === 'lighthouse')}>
				<Recommend is={tier === 'lighthouse'} />
				<header>
					<h3>Lighthouse</h3>
					<p>For large or multi-site churches focused on volunteers, in-depth analytics and wanting full automation.</p>
					<PriceEstimate base={299} people={people} step={500} stepPrice={50}>
						Custom pricing
					</PriceEstimate>
				</header>
				<div>Growth, plus...</div>
				<ul>
					<li>Wave Services & Teams</li>
					<li>Wave Analytics</li>
					<li>Wave Automation Studio</li>
					<li>Wave Graph API</li>
					<li>Phone support available</li>
					<li>Unlimited campuses</li>
					<li>Implementation specialists</li>
					<li>Coaching & Masterclasses</li>
				</ul>
				<footer>
					<Link to={people >= 2000 ? '/contact' : signUpUrl + 'lighthouse'} className={btnClasses(tier === 'lighthouse')} role='button'>
						{people >= 2000 ? `Get in touch` : `Get started for free`}
					</Link>
				</footer>
			</section>
		</div>
	);
};
export default Editions;

interface PriceEstimateProps {
	base: number;
	people: number;
	step: number;
	stepPrice: number;
}
const PriceEstimate: React.FC<PriceEstimateProps> = ({ base, people, step, stepPrice, children }) => {
	if (children && people >= 2000) {
		return (
			<div className='price'>
				<div>
					<br />
				</div>
				{children}
			</div>
		);
	}
	const extra = Math.max(0, (people || 0) - 500);
	return (
		<div className='price'>
			<div>
				<small>from...</small>
			</div>
			<sup>$</sup>
			{base + Math.ceil(extra / step) * stepPrice} <small>AUD/month</small>
		</div>
	);
};

const Recommend: React.FC<{ is: boolean; isDefault?: boolean }> = ({ is, isDefault }) => (
	<div className={`top ${is ? `is` : ``}`}>
		{is ? isDefault ? `adjust the slider below` : `recommended for you*` : <br />}
	</div>
);
