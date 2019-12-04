import React from 'react';
import { Link } from 'gatsby';

const FAQ: React.FC = () => (
	<div className='row faq'>
		<div className='text-center'>
			<header className='faq-title px-3'>
				<h2>Frequently Asked Questions</h2>
				<p>We’re here to help. If you run into any problems at all, feel free to use the help button to contact us.</p>
			</header>
			<div className='row text-left'>
				<QA q='What happens after my trial?'>
					You can subscribe any time during your 30-day trial. However, if you hit the end of your trial without
					subscribing, your account will be put on hold (all your data will stay safe for another 30 days, so don’t
					stress) until you subscribe or cancel.
				</QA>
				<QA q='Do I have to sign a long term contract?'>
					No. UCare is pay as you go, there are no long term contracts or commitments on your part. You simply pay
					month-to-month. If you cancel, you’ll be billed for the current month, but you won’t be billed again.
				</QA>
				<QA q='Are there per-user fees?'>
					No. The price is inclusive of all the feature, with as many users as you need. We charge based on the number
					of people regularly connected to your church.
				</QA>
				<QA q='Who is considered regular?'>
					We consider any person that attends three or more times in 60 days to be regular. If people stop attending
					regularly you should archive them.
				</QA>
				<QA q='Can I still contact archived people?'>
					Yes, archived people are similar to regular people &amp; visitors. You can still view their full profile, send
					them email or SMS, register for events and record future attendance.
				</QA>
				<QA q='Do you charge for visitors?'>
					We don’t charge for visitors or infrequent attenders, though once people attend three times in 60 days they
					are considered regular and will be charged for.
				</QA>
				<QA q='Do you charge for children?'>
					We only charge for children who attend regularly, this allows us to dedicate resources to continue improving
					our easy to use child safety features.
				</QA>
				<QA q='What types of payment do you accept?'>
					Once your trial ends you’ll be able to pay your monthly subscription using any major credit card or you can
					use PayPal.
				</QA>
				<QA q='Are there setup costs?'>None, simply subscribe after your 30-day trial ends to keep your account.</QA>
				<QA q='Can I import our data?'>
					Sure can. UCare walks you through importing people, households, groups and more from CSV files. Most databases
					will export in CSV format so you can quickly transition your data.
				</QA>
				<QA q='Can you help migrate our data?'>
					Yes! Our team has a number of tools to help migrate more of your data to UCare. Please use the help button to
					contact our support team who are happy to help.
				</QA>
				<QA q='Will I be able to import custom fields?'>
					Yes! You can import as many custom fields as you need, you can even give your users the ability to create
					custom fields on the fly if you want.
				</QA>
				<QA q='Can we export our data?'>
					Whether you want a backup or you have decided to close your account you can export your data from UCare.
				</QA>
				<QA q='What format can we export?'>
					You can export your data in CSV format when you need, or contact support to request a copy of the latest
					backup of your data.
				</QA>
				<QA q='How often are backups run?'>
					Backup runs continuously, backing up your data to different geographical locations. If the internet dies or
					the hardware that your data is on then within about one minute our systems automatically switch to a backup.
				</QA>
				<QA q='Where is our data stored?'>
					Your data is stored as close to you as possible, this can be important to ensure that your data is governed by
					to laws of your country. We currently have two locations in the United States, two in Europe and two in
					Australia.
				</QA>
				<QA q='Do you provide training?'>
					Absolutely! We want to do everything we can to make sure you understand how to use UCare and are using it the
					best you can. After all, if no one can use it, what good is it? Use the help button to find out more.
				</QA>
				<QA q='What level of auditing exists?'>
					For security reasons it may be important to audit user’s activity. Admins have access to a full audit log so
					they can see exactly who is viewing which info and what changes they are making.
				</QA>
				<QA q='What happens to deleted info?'>
					Any deleted info (e.g. people, groups, payments, etc.) is removed right away. But a backup of this info is
					kept and you can undelete it at any time, it will even be available in 10 years.
				</QA>
				<QA q='What is your service availability?'>
					Our average up-time is over 99.95%, less than 20 minutes unplanned down time in a month. We have a{' '}
					<Link to='/sla'>Service Level Agreement of 99.9%</Link>, if we ever fail to meet this a credit will be applied
					to your account.
				</QA>
				<QA q='Do you have phone support?'>
					We find that our free email support &amp; help center is more than adequate for most churches. But phone
					support packages are available, use the help button to ask for a quote.
				</QA>
			</div>
		</div>
	</div>
);
export default FAQ;

const QA: React.FC<{ q: string }> = ({ q, children }) => (
	<div className='col-lg-4 py-2 px-3 d-inline'>
		<h4>Q: {q}</h4>
		<p>{children}</p>
	</div>
);
