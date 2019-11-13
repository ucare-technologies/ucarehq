import React from 'react';

export default function ThreeUp({ children }: { children: React.ReactNode }) {
	return (
		<div className='row three-up'>
			<div className='col-md-4'>
				<h3>Get started quickly</h3>
				<p>{children}</p>
			</div>
			<div className='col-md-4'>
				<h3>People that care</h3>
				<p>
					We know it is frustrating when things don’t work as expected, that’s why we invest in a great support team to
					help with questions you have. We also have plenty of articles, videos and training available.
				</p>
			</div>
			<div className='col-md-4'>
				<h3>Continual improvement</h3>
				<p>
					We’re always refining and improving based on our customer’s usage and needs. We want to work together to make
					UCare even better, when you have an idea or feedback feel free to share.
				</p>
			</div>
		</div>
	);
}
