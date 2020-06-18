import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FluidImageSrc, FixedImageSrc } from '../../types';
import FadeIn from '../fade-in';
import FixedImage from '../fixed-image';

import WaveLogo from './wavetech';
import WaveHeart from './waveheart-white';

export default function Features() {
	const { planner, analytics, checkIn, automation, security, forms } = useStaticQuery<{
		planner: FixedImageSrc;
		analytics: FixedImageSrc;
		checkIn: FixedImageSrc;
		automation: FluidImageSrc;
		security: FluidImageSrc;
		forms: FluidImageSrc;
	}>(graphql`
		query {
			planner: file(relativePath: { eq: "wave/planner.png" }) {
				childImageSharp {
					fixed(width: 1280, quality: 100) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
			analytics: file(relativePath: { eq: "wave/analytics.png" }) {
				childImageSharp {
					fixed(width: 1280, quality: 100) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
			checkIn: file(relativePath: { eq: "wave/check-in.png" }) {
				childImageSharp {
					fixed(width: 1280, quality: 100) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
			automation: file(relativePath: { eq: "wave/automation.png" }) {
				childImageSharp {
					fluid(maxWidth: 1600, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			security: file(relativePath: { eq: "wave/security.png" }) {
				childImageSharp {
					fluid(maxWidth: 1600, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			forms: file(relativePath: { eq: "wave/forms.png" }) {
				childImageSharp {
					fluid(maxWidth: 1600, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	return (
		<div className='wave-container'>
			<div className='container-fluid wave-logo'>
				<div className='container text-center'>
					<FadeIn fade='up'>
						<WaveLogo />
					</FadeIn>
					<FadeIn fade='up' className='col-lg-8 mx-auto pt-5 text-block text-left'>
						<p>
							The world is changing faster than ever before, and technology is rapidly improving. To better serve the
							needs of our churches in the decade ahead, we have spent the last three years creating Wave.
						</p>
						<p>
							Wave is the new foundation on which UCare is building intelligent solutions for the 2020s and beyond.
							Think of it like a new heart, brain, and nervous system powering UCare.
						</p>
						<p>
							Wave establishes UCare as the most sophisticated & scalable church software service in the world, enabling
							churches to engage and disciple people better than ever before.
						</p>
						<p>
							UCare Wave brings an even faster, more intelligent, and efficient platform to empower your teams,
							collaborate on services, and deliver a more personalized experience across the discipleship journey.
						</p>
						<p>The UCare Wave platform upgrade happened on January 20, 2020.</p>
						<p>
							Following the platform upgrade to UCare Wave, we will be releasing the first set of intelligent solutions
							built with Wave, including the following.
						</p>
					</FadeIn>
				</div>
			</div>
			<div className='container-fluid wave-analytics'>
				<WaveSection d={4} alt />
				<div className='container'>
					<FadeIn fade='up'>
						<h2>Analytics</h2>
						<h3>Now Available</h3>
					</FadeIn>
					<div className='row pt-5'>
						<div className='col-lg-9 mx-lg-auto col-xl-6 align-self-center'>
							<FadeIn fade='left' className='text-block'>
								<p>
									Healthy churches grow, but the question then is, do you know what health looks like for your church?
									For instance, do you have five key indicators of church health, or do you want more detail?
								</p>
								<p>
									If you can’t measure church health, you can’t improve it. And yet, as Pastor Craig Groeschel has said,
									"It’s difficult to measure success in leading people spiritually. How do you accurately gauge if
									people are growing closer to God?" Numerical growth alone is not a good indicator of health; you need
									a broader picture to know what happens in people’s hearts.
								</p>
								<p>
									Once you have started defining what church health looks like, how is it surfaced and communicated?
									Dashboards displaying your vitals tell the story of church health, empowering leaders to make more
									strategic and better-informed decisions.
								</p>
								<p>
									Wave Analytics has been developed on top of Microsoft Power BI, the most powerful business
									intelligence platform available.
								</p>
								<p>
									With Wave Analytics, churches can capture valuable insights for discipleship and church health through
									powerful and beautiful charts and interactive dashboards. And because it uses such a powerful
									platform, the scope of the custom visualizations churches can create far exceeds anything available in
									other Church Management Systems today.
								</p>
							</FadeIn>
						</div>
						<div className='col-xl-6 pl-xl-5 align-self-center'>
							<FadeIn fade='right'>
								<FixedImage alt='Analytics' image={analytics} className='rounded-lg shadow' />
							</FadeIn>
						</div>
					</div>
				</div>
				<WaveSection d={1} />
				<WaveHeart delay={1} />
			</div>
			<div className='container-fluid automation-studio'>
				<FadeIn fade='up'>
					<div className='centered-image mx-auto'>
						<Img fluid={automation.childImageSharp.fluid} alt='Automation' />
					</div>
					<div className='container'>
						<h2>Automation Studio</h2>
						<h3>Arriving 2020</h3>
						<div className='row pt-5'>
							<div className='col-lg-8 mx-auto text-block'>
								<p>
									New people integration, leadership training, and other processes can have much of the follow-up
									automated using UCare Processes. You can create processes and set up actions to tell UCare to do
									things like send personalized thanks for visiting SMS, coffee catch-up invitations, pre-populated
									survey forms, profile updates, and much more.
								</p>
								<p>
									Currently, people only move through Processes as a result of a Form response, another Process action,
									an Event registration, a Store purchase, or by someone manually moving them.
								</p>
								<p>
									But what if you need to send Children Checks renewal reminders, birthday messages, or an invite to a
									Young Adults small group after a youth turns 18. How about sending a welcome email to a person when
									they join a small group? For kids, maybe you want to promote classes on a set date?
								</p>
								<p>
									How do you notify pastors to follow-up with people promptly when they complete a key discipleship
									milestone? Or for your communications team, how about automatically posting a photo to Instagram when
									you hit a defined number of event registrations?
								</p>
								<p>
									Wave Automation Studio is a code-free solution we have imagined for these scenarios and much more.
									Automation Studio will allow you to create automations that either react to any change in UCare or
									Schedule your automation to run at a set interval. Automation Studio will even integrate with external
									services like Zapier so you can build all manner of automations. All through the intelligent power of
									UCare Wave.
								</p>
							</div>
						</div>
					</div>
				</FadeIn>
			</div>
			<div className='container-fluid services-teams'>
				<WaveSection d={0} alt />
				<div className='container'>
					<FadeIn fade='up'>
						<h2>Services & Teams</h2>
						<h3>Arriving first half, 2020</h3>
					</FadeIn>
					<div className='row pt-5'>
						<div className='col-lg-9 mx-lg-auto col-xl-6 align-self-center'>
							<FadeIn fade='left' className='text-block'>
								<p>
									Having a way to schedule your volunteer teams, plan your services, and reserve resources or rooms
									without conflicts can be tricky. Ensuring all of this is communicated with the right people can seem
									daunting. Did your pastor want to change something last minute? Unthinkable, I know, but if it
									happens, so clearly communicating the change is essential.
								</p>
								<p>
									Wave Services makes it much easier to make those last-minute changes and have everyone see the changes
									right away. Wave Teams also matches the skills of team members so that the right people fill any open
									positions.
								</p>
								<p>
									Wave Services assists with scheduling people by ensuring people have set their availability, who they
									prefer to serve with, and how often, all without needing a password, that they forgot, again.
								</p>
								<p>
									Multi-Planner allows you to work on plans for multiple services at the same time. It supports
									drag-and-drop, so volunteers are quickly assigned to open positions. Songs and any other required
									files can also be dropped in place, so the right people have access to them for rehearsal or the
									actual service.
								</p>
								<p>
									Once plans are complete, Wave Services takes care of notifying volunteers, confirming their
									availability, and then reminding them of upcoming times they are required.
								</p>
								<p>
									On the day of the service, leaders can see on the plan which volunteers are checked-in and available.
									And volunteer teams can use Live mode to chat, collaborate, and see what needs to happen next in
									real-time.
								</p>
							</FadeIn>
						</div>
						<div className='col-xl-6 pl-xl-5 align-self-center'>
							<FadeIn fade='right'>
								<FixedImage alt='Service Multi-Planner' image={planner} className='rounded-lg shadow' />
							</FadeIn>
						</div>
					</div>
				</div>
				<WaveSection d={3} />
				<WaveHeart delay={0} />
			</div>
			<div className='container-fluid wave-security'>
				<FadeIn fade='up'>
					<div className='centered-image mx-auto'>
						<Img fluid={security.childImageSharp.fluid} alt='Security' />
					</div>
					<div className='container'>
						<h2>Security</h2>
						<h3>Arriving second half of 2020</h3>
						<div className='row pt-5'>
							<div className='col-lg-8 mx-auto text-block'>
								<p>
									At UCare, we have the philosophy that a church should be able to start using UCare with as little set
									up work as possible. Access & Security is a big area that was influenced by this philosophy. UCare
									avoids passwords where possible; for example, when a form is sent via email or SMS, the fields can
									still be prepopulated. When giving others access to UCare, you simply pick the areas of UCare they
									need to access.
								</p>
								<p>
									These simple access options make it easy to get started and get others started with UCare. Yet, often
									you’ll later want to do things like further lock-down your youth from editing Forms, viewing notes, or
									changing parent’s profiles.
								</p>
								<p>
									The Wave Graph is our new single source of truth and Wave intelligence, and it has had these concepts
									built-in from the get-go. Here are a few security options that Wave adds:
								</p>
								<ol>
									<li>
										<b>Role-based access</b> - now you can assign people a role like Youth Leader, change the access
										options on the role, and it reflects across all people assigned that role.
									</li>
									<li>
										<b>Fine-grained permission</b> - enables you to grant view, create, edit and delete permission
										individually at the feature level (e.g., Groups), type level (e.g., Small groups), item level (e.g.,
										Andy’s Bible Study) or item detail level (e.g., a demographic stored under the groups details
										section).
									</li>
									<li>
										<b>Two-factor authentication (2FA)</b> - this means after signing in, people also need to enter a
										code (e.g., sent via SMS). The code is a second factor and helps ensure that hackers can’t get
										access if they happen to guess or steal your password.
									</li>
									<li>
										<b>Password options</b> - set complexity requirements, bulk reset passwords and bulk remove access.
									</li>
								</ol>
							</div>
						</div>
					</div>
				</FadeIn>
			</div>
			<div className='container-fluid wave-check-in'>
				<WaveSection d={2} alt />
				<div className='container'>
					<FadeIn fade='up'>
						<h2>Check-in</h2>
						<h3>Arriving second half of 2020</h3>
					</FadeIn>
					<div className='row pt-5'>
						<div className='col-lg-9 mx-lg-auto col-xl-6 align-self-center'>
							<FadeIn fade='left' className='text-block'>
								<p>
									The Check in Kiosk is the most relied on element of UCare during services. It not only tracks vital
									information about children while they are in the church’s care but is also the primary way most
									parents interact with UCare, which is especially important for the experience of new families.
								</p>
								<p>
									2019 saw many new additions like multiple nametag label designs, custom nametag details, and nametag
									emoji to indicate new people, birthdays, or absent people. It also saw Brother WiFi printer support
									added to the existing low-cost DYMO printer and high-speed Zebra printer support.
								</p>
								<p>
									The updates went smoothly, yet the more things change, the higher the chance of breakage. Because
									check-in is so important, we are choosing not to upgrade the current Check in kiosk with Wave; it will
									remain as is for the foreseeable future.
								</p>
								<p>
									To take advantage of Wave, a new check-in experience is coming, allowing you to keep using the current
									Check in Kiosk while trialing the new Wave Check-in.
								</p>
								<p>Here are some of the options that Wave Check-in adds:</p>
								<ol>
									<li>
										<b>Roster check-in/out</b> - optimized for check-in/out at rooms.
									</li>
									<li>
										<b>Live Update</b> - replicates changes across all devices in real-time.
									</li>
									<li>
										<b>Form integration</b> - makes it much faster to add new families, update existing info, or file
										incident reports from within Check-in.
									</li>
									<li>
										<b>Direct SMS</b> - enables volunteers to message parents without leaving Check-in.
									</li>
									<li>
										<b>Scheduled volunteer check-in</b> - so Team leaders can see in today’s Service which volunteers
										have arrived.
									</li>
								</ol>
							</FadeIn>
						</div>
						<div className='col-xl-6 pl-xl-5 align-self-center'>
							<FadeIn fade='right'>
								<FixedImage alt='CheckIn' image={checkIn} className='rounded-lg shadow' />
							</FadeIn>
						</div>
					</div>
				</div>
				<WaveSection d={5} />
				<WaveHeart delay={2} />
			</div>
			<div className='container-fluid wave-forms'>
				<FadeIn fade='up'>
					<div className='centered-image mx-auto'>
						<Img fluid={forms.childImageSharp.fluid} alt='Forms' />
					</div>
					<div className='container'>
						<h2>Forms</h2>
						<h3>Arriving third quarter of 2020</h3>
						<div className='row pt-5'>
							<div className='col-lg-8 mx-auto text-block'>
								<p>
									Forms are a vital tool for many ministries, allowing them to quickly collect the right data securely,
									avoid lost permission forms. Forms already include limited capabilities to automate follow-up by
									adding people to Processes or Groups based on their answers.
								</p>
								<p>
									UCare Wave upgrades Forms to deliver even more automation, analytics, and intelligence options,
									including:
								</p>
								<ol>
									<li>
										<b>Calculated questions</b> - completed by calculating a cost, comparing dates, or using other
										answers.
									</li>
									<li>
										<b>Conditional questions</b> - display based on other answers using an easy-to-use logic builder
										<b>- complete</b>.
									</li>
									<li>
										<b>Skip questions</b> - when they’re not required by placing them in repeating sections or pages.
									</li>
									<li>
										<b>Office only</b> - set questions to view or edit by "Office only" <b>- complete</b>.
									</li>
									<li>
										<b>Rating question type</b> - for example, "Disagree strongly" through to "Agree strongly", or 3 out
										of 5 stars.
									</li>
									<li>
										<b>Payment question type</b> - create simple camp registration forms, order forms, and more.
									</li>
									<li>
										<b>Form Process Action</b> - A new process action that sends Forms or display them to the assigned
										person. Response can then move people to other processes or steps based on answers <b>- complete</b>
										.
									</li>
								</ol>
							</div>
						</div>
					</div>
				</FadeIn>
			</div>
		</div>
	);
}

const waves = [
	'M0,320L48,298.7C96,277,192,235,288,202.7C384,171,480,149,576,144C672,139,768,149,864,160C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
	'M0,320L48,298.7C96,277,192,235,288,202.7C384,171,480,149,576,144C672,139,768,149,864,160C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	'M0,320L48,277.3C96,235,192,149,288,101.3C384,53,480,43,576,58.7C672,75,768,117,864,144C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
	'M0,320L48,277.3C96,235,192,149,288,101.3C384,53,480,43,576,58.7C672,75,768,117,864,144C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	'M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,144C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
	'M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,144C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
	'M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,117.3C672,149,768,203,864,240C960,277,1056,299,1152,282.7C1248,267,1344,213,1392,186.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
	'M0,32L48,37.3C96,43,192,53,288,64C384,75,480,85,576,117.3C672,149,768,203,864,240C960,277,1056,299,1152,282.7C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
];
function WaveSection({ d, alt }: { d: number; alt?: boolean }) {
	const name = `filter${d + 2}`;
	return (
		<svg
			viewBox='0 0 1440 320'
			style={{ fill: '#fff', width: '100%', height: '22.222vw' }}
			preserveAspectRatio='none'
			className='section-divide-video'
		>
			<path d={waves[d]} filter={`url(#${name})`}></path>
			<defs>
				{alt ? (
					<filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id={name}>
						<feOffset dx='0' dy='5' in='SourceAlpha' result='offset1'></feOffset>
						<feGaussianBlur stdDeviation='3' in='offset1' result='blur1'></feGaussianBlur>
						<feColorMatrix
							values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0'
							in='blur1'
							type='matrix'
							result='matrix1'
						></feColorMatrix>
						<feBlend in='SourceGraphic' in2='matrix1' mode='normal' />
					</filter>
				) : (
					<filter x='-50%' y='-50%' width='200%' height='200%' filterUnits='objectBoundingBox' id={name}>
						<feOffset dx='0' dy='-5' in='SourceAlpha' result='offset1'></feOffset>
						<feGaussianBlur stdDeviation='3' in='offset1' result='blur1'></feGaussianBlur>
						<feColorMatrix
							values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0'
							in='blur1'
							type='matrix'
							result='matrix1'
						></feColorMatrix>
						<feBlend in='SourceGraphic' in2='matrix1' mode='normal' />
					</filter>
				)}
			</defs>
		</svg>
	);
}
