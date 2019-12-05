import * as React from 'react';
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import Badge from '../badge';

import Estimate from './estimate';
import { getTier } from './features';

const bookCallSize = 1500;
type Terms = 'monthly' | 'yearly';

const EditionSelect: React.FC = () => {
	const [terms, setTerms] = React.useState('yearly' as Terms);
	const [value, setValue] = React.useState(undefined as undefined | number);
	const handleTermsChange = React.useCallback((newTerms: Terms) => setTerms(newTerms), [setTerms]);
	const handleValueChange = React.useCallback((newValue: number) => setValue(newValue), [setValue]);
	const isLarge = useMediaQuery({ query: '(min-width: 768px)' });
	const estimate = <Estimate value={value || 500} onChange={handleValueChange} />;
	return (
		<>
			{!isLarge && estimate}
			<TermsSelect value={terms} onChange={handleTermsChange} />
			<Editions value={value} terms={terms} />
			{isLarge && estimate}
			<Contact />
		</>
	);
};
export default EditionSelect;

const TermsSelect: React.FC<{ value: Terms; onChange: (terms: Terms) => void }> = ({ value, onChange }) => {
	const handleTermsChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value as Terms),
		[onChange]
	);
	return (
		<div className='text-center my-4'>
			<div className='custom-control custom-radio custom-control-inline'>
				<input
					type='radio'
					id='customRadioInline1'
					className='custom-control-input'
					checked={value === 'yearly'}
					value='yearly'
					onChange={handleTermsChange}
				/>
				<label className='custom-control-label' htmlFor='customRadioInline1'>
					Annually
				</label>
			</div>
			<div className='custom-control custom-radio custom-control-inline'>
				<input
					type='radio'
					id='customRadioInline2'
					className='custom-control-input'
					checked={value === 'monthly'}
					value='monthly'
					onChange={handleTermsChange}
				/>
				<label className='custom-control-label' htmlFor='customRadioInline2'>
					Monthly
				</label>
			</div>
		</div>
	);
};

const Contact: React.FC = () => {
	return (
		<div className='pricing-estimate pb-4 text-center'>
			<header>
				<h3>Not sure which edition is for you?</h3>
				<p>We'd love to talk with you and discuss the unique needs of your church.</p>
			</header>
			<Link to='/contact' className='btn btn-outline-secondary' role='button'>
				<BookCall />
			</Link>
		</div>
	);
};

const BookCall: React.FC = () => (
	<>
		Book a call <FontAwesomeIcon icon={faPhone} className='ml-2' />
	</>
);

function btnClasses(is: boolean) {
	return `btn btn-block ${is ? `btn-primary` : `btn-outline-secondary`}`;
}
function sectionClasses(is: boolean) {
	return `col-md edition ${is ? `recommend` : ``}`;
}

interface EditionsProps {
	value?: number;
	terms: Terms;
}
const Editions: React.FC<EditionsProps> = ({ value, terms }) => {
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
					<PriceEstimate base={99} people={people} step={100} stepPrice={10} terms={terms} />
				</header>
				<ul>
					<li>People & Households</li>
					<li>Secure notes</li>
					<li>Custom fields</li>
					<li>Groups & Attendance</li>
					<li>Personalized Bulk Email</li>
					<li>
						Personalized Bulk SMS <Badge type='light'>add-on</Badge>
					</li>
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
				<Recommend is={tier === 'growth'} />
				<header>
					<h3>Growth</h3>
					<p>For growing churches focused on child safety, outreach and wanting follow-up automation.</p>
					<PriceEstimate base={199} people={people} step={100} stepPrice={20} terms={terms} />
				</header>
				<ul>
					<li>
						<b>All Essentials features</b>
					</li>
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
					{people >= bookCallSize ? (
						<div className='price'>
							Let's discuss
							<br /> your unique needs
						</div>
					) : (
						<PriceEstimate base={299} people={people} step={500} stepPrice={50} terms={terms} />
					)}
				</header>
				<ul>
					<li>
						<b>All Growth features</b>
					</li>
					<li>
						Wave Services & Teams <Badge type='success'>New</Badge>
					</li>
					<li>
						Wave Analytics <Badge type='success'>New</Badge>
					</li>
					<li>
						Wave Automation Studio <Badge type='success'>New</Badge>
					</li>
					<li>Wave Graph API</li>
					<li>Phone support available</li>
					<li>Unlimited campuses</li>
					<li>Implementation specialists</li>
					<li>Coaching & Masterclasses</li>
				</ul>
				<footer>
					<Link
						to={people >= bookCallSize ? '/contact' : signUpUrl + 'lighthouse'}
						className={btnClasses(tier === 'lighthouse')}
						role='button'
					>
						{people >= bookCallSize ? <BookCall /> : `Get started for free`}
					</Link>
				</footer>
			</section>
		</div>
	);
};

interface PriceEstimateProps {
	base: number;
	people: number;
	step: number;
	stepPrice: number;
	terms: Terms;
}
const PriceEstimate: React.FC<PriceEstimateProps> = ({ base, people, step, stepPrice, terms }) => {
	const price = base + Math.ceil(Math.max(0, (people || 0) - 500) / step) * stepPrice;
	const termsPrice = terms === 'yearly' ? Math.floor(price * 0.9) : price;
	return (
		<div className='price'>
			<div>
				<small>from...</small>
			</div>
			<sup>$</sup>
			{termsPrice} <small>AUD/month</small>
		</div>
	);
};

interface RecommendProps {
	is: boolean;
}
const Recommend: React.FC<RecommendProps> = ({ is }) => (
	<div className='top'>{is ? `recommended for you*` : <br />}</div>
);
