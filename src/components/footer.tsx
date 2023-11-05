// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Link } from 'gatsby';

const Layout: React.FC = () => (
	<footer className='footer text-center'>
		<ul>
			<li>
				<Link to='/legal/terms'>Terms</Link>
			</li>
			<li>
				<Link to='/legal/privacy'>Privacy</Link>
			</li>
			<li>
				<Link to='/legal/gdpr'>GDPR</Link>
			</li>
			<li>
				<Link to='/legal/sla'>SLA</Link>
			</li>
			<li>
				<a target='_blank' rel='noopener noreferrer' href='http://status.ucarehq.com/'>
					Status
				</a>
			</li>
		</ul>
		<div>UCare © {`2006-${new Date().getFullYear()}`}</div>
	</footer>
);
export default Layout;
