import React from 'react';
import { Link } from 'gatsby';

const Layout: React.FC = () => (
	<footer className='footer text-center'>
		<ul>
			<li>© Copyright UCare {`2006-${new Date().getFullYear()}`}</li>
			<li>
				<Link to='/privacy'>Privacy</Link>
			</li>
			<li>
				<Link to='/terms'>Terms</Link>
			</li>
			<li>
				<Link to='/sla'>SLA</Link>
			</li>
			<li>
				<a target='_blank' rel='noopener noreferrer' href='http://status.ucarehq.com/'>
					Status
				</a>
			</li>
		</ul>
	</footer>
);
export default Layout;
