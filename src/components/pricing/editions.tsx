/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import Badge from '../badge';
import useScript from '../useScript';

import Estimate from './estimate';
import { getEdition } from './features';

const bookCallSize = 1500;
type Terms = 'monthly' | 'yearly';

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
					id='customRadioInline2'
					className='custom-control-input'
					checked={value === 'monthly'}
					value='monthly'
					onChange={handleTermsChange}
				/>
				<label className='custom-control-label' htmlFor='customRadioInline2'>
					Billed Monthly
				</label>
			</div>
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
					Billed Annually <Badge type={value === 'yearly' ? 'success' : 'light'}>Save 10%</Badge>
				</label>
			</div>
		</div>
	);
};
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Calendly {
	function initPopupWidget(options: { url: string }): void;
}
const BookCall: React.FC = () => {
	const { loaded, error } = useScript('https://assets.calendly.com/assets/external/widget.js');
	const handleClick = React.useCallback(() => {
		if (error) {
			if (confirm('The "Book a call" tool failed, please try again after the page reloads')) {
				document.location.reload();
			}
		} else {
			Calendly.initPopupWidget({
				url:
					'https://calendly.com/ucareapp/book-a-call?hide_event_type_details=1&background_color=ffffff&text_color=323232&primary_color=72be1a',
			});
		}
	}, [error]);
	return !loaded && !error ? null : (
		<>
			<link href='https://assets.calendly.com/assets/external/widget.css' rel='stylesheet' />
			<a href='#' onClick={handleClick} className='btn btn-outline-primary btn-lg' role='button'>
				Book a call <FontAwesomeIcon icon={faPhone} className='ml-2' />
			</a>
		</>
	);
};
function btnClasses(is: boolean) {
	return `btn ${is ? `btn-primary` : `btn-outline-secondary`}`;
}
function sectionClasses(is: boolean) {
	return `col-md edition ${is ? `recommend` : ``}`;
}
const Contact: React.FC = () => (
	<div className='pricing-estimate pb-4 text-center'>
		<header>
			<h3>Not sure which edition is for you?</h3>
			<p>We’d love to talk with you and discuss the unique needs of your church.</p>
		</header>
		<BookCall />
	</div>
);
const Recommend: React.FC<{ is: boolean }> = ({ is }) => (
	<div className='top'>{is ? `recommended for you*` : <br />}</div>
);
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
interface EditionsProps {
	value?: number;
	terms: Terms;
}
const Editions: React.FC<EditionsProps> = ({ value, terms }) => {
	const people = value || 500;
	const edition = getEdition(people);
	const signUpUrl = `/sign-up/?size=${people}&edition=`;
	return (
		<div className='row'>
			<section className={sectionClasses(edition === 'Essentials')}>
				<Recommend is={edition === 'Essentials'} />
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
					<li>
						Websites <Badge type='light'>add-on</Badge>
					</li>
					<li>Email support</li>
				</ul>
				<footer>
					<Link to={`${signUpUrl}essentials`} className={btnClasses(edition === 'Essentials')} role='button'>
						Get started for free
					</Link>
				</footer>
			</section>
			<section className={sectionClasses(edition === 'Growth')}>
				<Recommend is={edition === 'Growth'} />
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
					<li>Church metrics</li>
					<li>Up to 5 campuses</li>
					<li>Monthly training webinars</li>
					<li>
						Wave Services & Teams <Badge type='success'>New</Badge>
					</li>
					<li>
						Wave Automation Studio <Badge type='success'>New</Badge>
						<div>
							<Badge type='light'>3 automations included</Badge>
						</div>
					</li>
				</ul>
				<footer>
					<Link to={`${signUpUrl}growth`} className={btnClasses(edition === 'Growth')} role='button'>
						Get started for free
					</Link>
				</footer>
			</section>
			<section className={sectionClasses(edition === 'Lighthouse')}>
				<Recommend is={edition === 'Lighthouse'} />
				<header>
					<h3>Lighthouse</h3>
					<p>For large or multi-site churches focused on volunteers, in-depth analytics and wanting full automation.</p>
					{people >= bookCallSize ? (
						<div className='price'>
							Let’s discuss
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
						Wave Analytics <Badge type='success'>New</Badge>
					</li>
					<li>
						Wave Automation Studio <Badge type='success'>New</Badge>
					</li>
					<li>
						Wave Services & Teams <Badge type='success'>New</Badge>
					</li>
					<li>
						Wave Graph API <Badge type='success'>New</Badge>
					</li>
					<li>Phone support available</li>
					<li>Unlimited campuses</li>
					<li>Implementation specialists</li>
					<li>Coaching & Masterclasses</li>
				</ul>
				<footer>
					{people >= bookCallSize ? (
						<BookCall />
					) : (
						<Link to={`${signUpUrl}lighthouse`} className={btnClasses(edition === 'Lighthouse')} role='button'>
							Get started for free
						</Link>
					)}
				</footer>
			</section>
		</div>
	);
};
const EditionSelect: React.FC = () => {
	const [terms, setTerms] = React.useState('yearly' as Terms);
	const [value, setValue] = React.useState(undefined as undefined | number);
	const handleTermsChange = React.useCallback((newTerms: Terms) => setTerms(newTerms), [setTerms]);
	const handleValueChange = React.useCallback((newValue: number) => setValue(newValue), [setValue]);
	return (
		<>
			<Estimate value={value || 500} onChange={handleValueChange} />
			<TermsSelect value={terms} onChange={handleTermsChange} />
			<Editions value={value} terms={terms} />
			<Contact />
		</>
	);
};
export default EditionSelect;
