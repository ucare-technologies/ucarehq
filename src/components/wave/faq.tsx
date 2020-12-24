// eslint-disable-next-line no-use-before-define
import * as React from 'react';

const QA: React.FC<{ q: string }> = ({ q, children }) => (
	<div className='col-lg-4 py-2 px-3 d-inline'>
		<h4>Q: {q}</h4>
		<p>{children}</p>
	</div>
);
const FAQ: React.FC = () => (
	<div className='container-fluid faq-container-2'>
		<div className='container'>
			<div className='row faq mx-auto'>
				<div className='text-center'>
					<header className='faq-title px-3'>
						<h2>Frequently Asked Questions</h2>
						<p />
					</header>
					<div className='row text-left mx-auto'>
						<QA q='What will Wave change in UCare?'>
							You will see the Wave icon light up throughout your account, signifying the change. You will also see a
							difference in speed, and then throughout 2020, the first of UCare's Wave solutions go live.
						</QA>
						<QA q='If we move to Wave, will I need to relearn UCare?'>
							No. What you have already learned about UCare will continue to look and work the same as it currently
							does.
						</QA>
						<QA q='As a subscriber, what do I need to do?'>
							Either stay on UCare's legacy platform or choose to upgrade into the faster, smarter, and more personal
							UCare Wave. If you're a UCare Admin, then you'll be prompted to do this the next time you sign in.
						</QA>
						<QA q='How does pricing change?'>
							As UCare has improved and become more feature-rich, we created three editions of UCare so that churches
							can choose the features that best suit their needs and budget. Each edition includes up to 500 active
							people and then a fee for additional profiles. We can also mix-and-match editions to tailor UCare
							precisely to your needs.
						</QA>
						<QA q='We use Planning center, do we need both?'>
							The Lighthouse edition of UCare Wave includes Services & Teams, which may replace your need for Planning
							Center Services. Many churches we've spoken tell us the Lighthouse edition is cheaper than UCare legacy
							pricing + Planning Center Services.
						</QA>
						<QA q='Can I stay on the legacy edition?'>
							Yes. We will keep your current subscription features in place for as long as you choose to stay
							subscribed. New features are only available through the new UCare Wave subscriptions, and your legacy
							pricing is increasing.
						</QA>
					</div>
				</div>
			</div>
		</div>
	</div>
);
export default FAQ;
