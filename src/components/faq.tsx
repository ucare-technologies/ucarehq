import React from 'react';
import { Link } from 'gatsby';
import * as Scroll from 'react-scroll';

const FAQ: React.FC = () => (
	<Scroll.Element type='div' name='faq'>
		<div className='container-fluid text-center faq-container'>
			<div className='container'>
				<div className='row faq'>
					<div className='text-center'>
						<header className='faq-title px-3'>
							<h2>Frequently Asked Questions</h2>
							<p>
								We’re here to help. If you run into any problems at all, feel free to use the help button to contact us.
							</p>
						</header>
						<div className='row text-left'>
							<QA q='What happens after my trial?'>
								You can subscribe any time during your 21-day trial. However, if you hit the end of your trial without
								subscribing, your account will be put on hold (all your data will stay safe for another 30 days, so
								don’t stress) until you subscribe or cancel.
							</QA>
							<QA q='Do I have to sign a long term contract?'>
								No. You can choose to pay monthly, with no long term contracts or commitments on your part. If you
								cancel, you’ll be billed for the current month, but you won’t be billed again.
							</QA>
							<QA q='Can I change the UCare edition?'>
								Yes. You can upgrade or downgrade the edition when needed. Once subscribed to UCare, downgrades take
								effect at the end of your current billing period.
							</QA>
							<QA q='How are costs calculated?'>
								Each edition of UCare has a fixed base cost and includes up to 500 active people, if you have more then
								500 active people then there are additional costs. Essentials is $10/100, Growth is $20/100 and
								Lighthouse is $50/500.
							</QA>
							<QA q='Who are considered active?'>
								Any person that is recorded as having attended three or more times in 60 days becomes active. People who
								are a member of a public group in UCare are also considered active.
							</QA>
							<QA q='Can I still contact archived people?'>
								Yes, archived people are similar to active people &amp; visitors. You can still view their full profile,
								send them email or SMS, register for events and record future attendance.
							</QA>
							<QA q='Do you charge for children?'>
								Yes. Many parents tell us that their child’s safety is very important to them, charging for children
								allows us to dedicate resources to continue improving our child safety features.
							</QA>
							<QA q='Do you charge for visitors?'>
								We don’t charge for visitors or infrequent attenders, though once people attend three times in 60 days
								they are considered regular and will be charged for.
							</QA>
							<QA q='What types of payment do you accept?'>
								Once your trial ends you’ll be able to pay your subscription using any major credit card, Australian
								churches can also pay via bank deposit.
							</QA>
							<QA q='Do we pay a setup costs?'>
								No, simply subscribe after your 21-day trial ends to keep your account.
							</QA>
							<QA q='Can you help setup our account?'>
								Yes! Our implementation specialists are available to those on the Growth and Lighthouse editions.
							</QA>
							<QA q='Can I import our data?'>
								Sure can. UCare walks you through importing people, households, groups and more from CSV files. Most
								databases will export in CSV format so you can quickly transition your data.
							</QA>
							<QA q='Can you help migrate our data?'>
								Yes! Our team has a number of tools to help migrate more of your data to UCare. Please use the help
								button to contact our support team who are happy to help.
							</QA>
							<QA q='Will I be able to import custom fields?'>
								Yes! You can import as many custom fields as you need, you can even give your users the ability to
								create custom fields on the fly if you want.
							</QA>
							<QA q='Can we export our data?'>
								Whether you want a backup or you have decided to close your account you can export your data from UCare.
							</QA>
							<QA q='What format can we export?'>
								You can export your data in CSV format when you need, or contact support to request a copy of the latest
								backup of your data.
							</QA>
							<QA q='Where is our data stored?'>
								Your data is stored as close to you as possible, this can be important to ensure that your data is
								governed by to laws of your country. We currently have two locations in the United States, two in Europe
								and two in Australia.
							</QA>
							<QA q='Do you provide training?'>
								Absolutely! We want to do everything we can to make sure you understand how to use UCare and are using
								it the best you can. After all, if no one can use it, what good is it? Use the help button to find out
								more.
							</QA>
							<QA q='What level of auditing exists?'>
								For security reasons it may be important to audit user’s activity. Admins have access to a full audit
								log so they can see exactly who is viewing which info and what changes they are making.
							</QA>
							<QA q='What happens to deleted info?'>
								Any deleted info (e.g. people, groups, payments, etc.) is removed right away. But a backup of this info
								is kept and you can undelete it at any time, it will even be available in 10 years.
							</QA>
							<QA q='What is your service availability?'>
								Our average up-time is over 99.95%, less than 20 minutes unplanned down time in a month. We have a{' '}
								<Link to='/legal/sla'>Service Level Agreement of 99.9%</Link>, if we ever fail to meet this a credit
								will be applied to your account.
							</QA>
							<QA q='Do you have phone support?'>
								We find that our free email support &amp; help center is more than adequate for most churches. But phone
								support packages are available to churches on the Growth and Lighthouse editions, use the help button to
								ask for a quote.
							</QA>
							<QA q='We’re not a church, is there other pricing?'>
								We often work with para-church and not-for-profit organizations, use the help button to discuss your
								needs.
							</QA>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Scroll.Element>
);
export default FAQ;

const QA: React.FC<{ q: string }> = ({ q, children }) => (
	<div className='col-lg-4 py-2 px-3 d-inline'>
		<h4>Q: {q}</h4>
		<p>{children}</p>
	</div>
);
