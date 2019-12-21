import React from 'react';

import ChildrenIcon from '../icons/ministry-icons/children';
import YouthIcon from '../icons/ministry-icons/youth';
import WorshipIcon from '../icons/ministry-icons/worship';
import AdminFinancesIcon from '../icons/ministry-icons/admin.finances';
import CounsellingIcon from '../icons/ministry-icons/counselling';
import SmallGroupsIcon from '../icons/ministry-icons/smallgroup';
import FadeIn from '../fade-in';

export default function Ministry() {
	return (
		<section className='container ministry'>
			<FadeIn className='row text-center' fade='up'>
				<div className='col-md-12'>
					<h2>
						Ministry. <br className='visible-xs' />
						We’ve got you covered.
					</h2>
					<p>No matter what ministry you’re involved in; UCare is focused on people so you can be too.</p>
				</div>
			</FadeIn>
			<FadeIn className='row text-center' fade='up'>
				<div className='col-md-4'>
					<div className='ministry-circle'>
						<ChildrenIcon />
					</div>
					<h5>CHILDREN</h5>
					<h6>
						First impressions last so make a great start with easy to use check-in that improves child safety and
						volunteer management.
					</h6>
				</div>
				<div className='col-md-4'>
					<div className='ministry-circle'>
						<YouthIcon />
					</div>
					<h5>YOUTH</h5>
					<h6>
						Track attendance, book events, broadcast SMS, organize groups. There’s a lot youth ministry needs, UCare
						helps with it all.
					</h6>
				</div>
				<div className='col-md-4'>
					<div className='ministry-circle'>
						<WorshipIcon />
					</div>
					<h5>WORSHIP &amp; SERVICES</h5>
					<h6>
						Plan services, organize teams, confirm volunteers and learn new songs. We’ve got the tool that will simplify
						it all.
					</h6>
				</div>
			</FadeIn>
			<FadeIn className='row text-center' fade='up'>
				<div className='col-md-4'>
					<div className='ministry-circle'>
						<AdminFinancesIcon />
					</div>
					<h5>ADMIN &amp; FINANCES</h5>
					<h6>
						Reporting trends, tracking finances and managing facilities can quickly overload the best admins, why not
						let UCare take the load?
					</h6>
				</div>
				<div className='col-md-4'>
					<div className='ministry-circle'>
						<CounsellingIcon />
					</div>
					<h5>COUNSELLING &amp; FOLLOWUP</h5>
					<h6>
						Run effective counselling services &amp; ensure people don’t fall through the cracks. UCare tracks it &amp;
						sends timely reminders with ease.
					</h6>
				</div>
				<div className='col-md-4'>
					<div className='ministry-circle'>
						<SmallGroupsIcon />
					</div>
					<h5>SMALL GROUPS &amp; CONNECTION</h5>
					<h6>
						Make it easy for people to find &amp; join groups. Give leaders the tools they need to communicate &amp;
						quickly report attendance.
					</h6>
				</div>
			</FadeIn>
		</section>
	);
}
