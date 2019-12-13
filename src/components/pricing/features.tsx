import * as React from 'react';

import Yes from '../icons/check';
import NA from '../icons/remove';

export type Tier = `legacy` | `essentials` | `growth` | `lighthouse`;
export function getTier(value: number): Tier {
	if (value <= 200) return 'essentials';
	if (value <= 1000) return 'growth';
	return 'lighthouse';
}
type Feature = Record<Tier, React.ReactNode> & { name: string };
interface FeatureSet {
	name: string;
	description: string;
	features: Feature[];
}
function Values(
	name: string,
	legacy: React.ReactNode,
	essentials: React.ReactNode,
	growth: React.ReactNode,
	lighthouse: React.ReactNode
) {
	return {
		name,
		legacy,
		essentials,
		growth,
		lighthouse,
	} as Feature;
}
function Same(name: string, value: React.ReactNode) {
	return Values(name, value, value, value, value);
}
function All(name: string, value: React.ReactNode = <Yes />) {
	return Same(name, value);
}
function LGL(name: string, value: React.ReactNode = <Yes />) {
	return Values(name, value, <NA />, value, value);
}
function L(name: string, value: React.ReactNode = <Yes />) {
	return Values(name, <NA />, <NA />, <NA />, value);
}
function AL(name: string, other: React.ReactNode = `Add on`, lighthouse: React.ReactNode = <Yes />) {
	return Values(name, <NA />, <NA />, other, lighthouse);
}
function GL(name: string, value: React.ReactNode = <Yes />) {
	return Values(name, <NA />, <NA />, value, value);
}
function GLS(name: string) {
	return Values(
		name,
		<NA />,
		<NA />,
		`Add on - Coming 2020`,
		<span>
			<Yes /> Coming 2020
		</span>
	);
}

export function features() {
	return [
		{
			name: `People`,
			description: `All your people stored safely in one place`,
			features: [
				Values(
					`Included people (you don’t pay for visitors or archived people)`,
					`200 people included`,
					`500 people included`,
					`500 people included`,
					`500 people included`
				),
				Values(`Extra people`, `15c/person`, `$10/100 people`, `$20/100 people`, `$50/500 people`),
				All(`Unlimited notes, contact info, relationships, custom dates & fields`),
				All(`Flag preferred contact methods`),
				All(`Unsubscribe from email or SMS`),
				All(`Easily change photo’s using the camera on any tablet or phone`),
				All(`Merge duplicate profiles or use the bulk duplicate finder`),
				All(`Split & merge households`),
				All(`People can securely update their contact details in a way that avoids the need for a password`),
				All(`Send personalized email or SMS to one or multiple people`),
				All(`Print photo directories booklets`),
				All(`Bulk update profiles`),
				All(`Assign tasks that anyone can complete from their email inbox, no password required`),
				Same(`Send bulk SMS directly from UCare`, `Add on`),
				{
					name: `Send bulk email directly from UCare`,
					legacy: `10/person/month included`,
					essentials: `5/person/month included`,
					growth: `10/person/month included`,
					lighthouse: `20/person/month included`,
				},
				Values(`Extra Email messages`, `$2/1000`, `$3/1000`, `$2/1000`, `$1/1000`),
			],
		},
		{
			name: `Groups`,
			description: `Stay organized & help build connections`,
			features: [
				All(`Unlimited groups, times & group types`),
				All(`Unlimited group members`),
				All(`Unlimited group leaders`),
				All(`Custom leader roles`),
				All(`Build any report using auto-updating search groups that include members based on criteria you specify`),
				All(`Secure attendance reports are emailed to leaders in a way that avoids the need for passwords`),
				All(`Record that a group didn’t meet, or select who attended with just a few taps`),
				All(`Attendance submitted reports emailed to all group leaders`),
				All(`Embed a small group finder in websites and mobile apps so people can browse and join published groups`),
				All(`Add new people as part of attendance reports or directly to the group`),
				All(`Track custom stats. For example like giving, head count, decisions`),
				All(`Add photos in a snap with a phone or tablet’s camera`),
				All(`Built in reports in a variety of formats (web, print, PDF, CSV)`),
				All(
					`Absent, attendance, new people, not in a group, birthdays, notes, medical, Gender, age, attendance, members, giving, custom stats and much more`
				),
				All(`Print nametags, directories or address labels`),
			],
		},
		{
			name: `Check-in & Child Safety`,
			description: `Speed up, secure and simplify check-in & reporting`,
			features: [
				LGL(`Unlimited classes, rooms, age groups, times`),
				Values(
					`Check-in stations (phone, tablet, laptop or desktop)`,
					`20 included`,
					<NA />,
					`20 included`,
					`Unlimited`
				),
				LGL(`Assisted Check-in for registering & checking in visitors, updating personal info, and check-out`),
				LGL(`Self Check-in so regulars can quickly check-in themselves`),
				LGL(`Roster Check-in for room check-in & check-out`),
				LGL(`RFID or barcode key-tags for 10 second check-in & enhanced check-out security`),
				LGL(`Create custom forms for registration & consent`),
				LGL(`Automate follow-up with Processes`),
				LGL(`Add or update families & people on the fly in assisted check-in and roster check-in`),
				LGL(`Add photos in a snap with a phone or tablet’s camera`),
				LGL(`Parent/guardian name & phone printed on nametags for quick contact`),
				Values(`Send SMS directly from UCare to the parent/guardian`, `Add on`, <NA />, `Add on`, `Add on`),
				LGL(`Allergies, medical and notes are printed on nametags`),
				LGL(`Track police check requirements & renewals for volunteers`),
				LGL(`Secure handling split families or custody disputes`),
				LGL(`Zebra printer support for high performance check-in stations`),
				LGL(`Brother printer support for fully wireless check-in stations`),
				LGL(`DYMO printer support for low cost check-in stations`),
				LGL(`Customizable name tags & security tickets`),
			],
		},
		{
			name: `Event Bookings`,
			description: `Simplify ticket sales & event management`,
			features: [
				LGL(`Free or paid event registrations for classes, camps, outreach events and more`),
				LGL(`Unlimited ticket types`),
				LGL(`Unlimited attendees`),
				LGL(`RFID wristbands speed up lines with 2 second check-in`),
				LGL(`Reports for sales, refunds, attendees and more`),
				LGL(`Publish event registration pages on your website, church app or the UCare portal`),
				LGL(`Quickly scan tickets at the door with the UCare mobile app, print name tags and record attendance`),
				LGL(`Group booking express check-in`),
				LGL(`Collect custom attendee questions before or after registration`),
				LGL(`Group discount options & promo codes`),
				LGL(`Add analytics tracking`),
				LGL(`No per ticket fees from UCare`),
				LGL(`Payments in person or online via PayPal and Card`),
				LGL(`Flat monthly card processing fees with Pushpay`, `Optional`),
				LGL(`Card transaction rates start at 1.75% + 30c per transaction with Stripe`, `Optional`),
			],
		},
		{
			name: `Forms`,
			description: `Get answers fast`,
			features: [
				LGL(`Unlimited forms, questions & responses`),
				LGL(`Save a bookmark on your phone home screen and use a custom form like an app`),
				LGL(`Form responses can create profiles and update people’s existing profiles`),
				LGL(`Reports for form responses`),
				LGL(`Customize various question types in each form`),
				LGL(`Add a signature question to record signatures, stop losing paper forms and move to tablets & phones`),
				LGL(`Embed forms on your website or church app`),
				LGL(`Share forms on Facebook, twitter or elsewhere`),
				LGL(`Publish forms to the UCare portal`),
				LGL(`Securely pre-populate forms when send via email or SMS`),
				LGL(`Customize embedded forms to match your website or app style`),
				LGL(`Link to processes for prayer requests, volunteer applications, getting married, etc.`),
				LGL(`Automate adding or removing from a group, meeting or another process`),
				LGL(`Automate updating the person’s profile`),
			],
		},
		{
			name: `Processes`,
			description: `Automate your follow-up processes`,
			features: [
				LGL(`Unlimited processes`),
				LGL(`Focus on the people your responsible for or on everyone`),
				LGL(`Process step success indicators measure your team and help improve the process`),
				LGL(`Each process is its own report that you can easily print`),
				LGL(`Customize the steps in each process`),
				LGL(`Automate sending personalized email & SMS`),
				LGL(`Automate adding or removing from a group, meeting or another process`),
				LGL(`Automate updating the person’s profile`),
				LGL(`Automate assigning additional tasks to others`),
				LGL(`Automate adding people who order resource`),
				LGL(`Automate adding people the register for an event`),
				LGL(`Automate adding people who submit form responses`),
				LGL(`Assigned people receive daily summary of due follow-up`),
			],
		},
		{
			name: `Giving & Finances`,
			description: `It’s about the heart`,
			features: [
				LGL(`Unlimited payments`),
				LGL(`Record pledges, donations and other payments`),
				LGL(`Categorize payments`),
				LGL(`Send tax statements to the entire church`),
				LGL(`Export payments to your favorite accounting software, i.e. QuickBooks, Xero, etc.`),
				LGL(`Optionally email receipts with every payment`),
				LGL(`Issue refunds, both cash & Card`),
				LGL(`Payments via card, cash, ACH, check or PayPal`),
				LGL(`PCI DSS compliant gives peace of mind that all payment info is secure`),
				LGL(`Over 100 currencies accepted by our payment processors`),
				LGL(`Flat monthly card processing fees & 10 second giving with Pushpay`, `Optional`),
				LGL(`Or card transaction rates start at 1.75% + 30c per transaction with Stripe`, `Optional`),
				LGL(`No per transaction fees from UCare`),
				LGL(`Embed payment forms on your website or in an app`),
				LGL(`Publish a payment form to the UCare portal`),
				LGL(`Customize embedded payment forms to match your website or app style`),
				LGL(`Display the published payment form on any tablet for kiosk giving`),
				LGL(`Process payments over the phone`),
			],
		},
		{
			name: `Stores`,
			description: `Sell in person and online`,
			features: [
				LGL(`Unlimited stores, products & orders`),
				LGL(`Sell or give away physical or digital products`),
				LGL(`Track product stock`),
				LGL(`Add barcodes to products to speed up ordering`),
				LGL(`Display multiple images for each product`),
				LGL(`Include multiple audio, video or other files for download products`),
				LGL(`Customers are emailed invoices upon order completion`),
				LGL(`Issue order refunds, both cash & card`),
				LGL(`Add product variations and extra options, each with its own price`),
				LGL(`Payments in person or online via card or PayPal`),
				LGL(`Flat monthly card processing fees with Pushpay`, `Optional`),
				LGL(`Or card transaction rates start at 1.75% + 30c per transaction with Stripe`, `Optional`),
				LGL(`No per order fees from UCare`),
				LGL(`Embed stores on your website or church app`),
				LGL(`Publish stores to the UCare portal`),
				LGL(`Customize embedded forms to match your website or app style`),
				LGL(`Use stores on any tablet for kiosk or retail ordering`),
				LGL(`Process orders over the phone`),
				LGL(`Link to Processes to track fulfillment and automate customer notifications`),
				LGL(`The order board let’s your café team manage each item of an order`),
				LGL(`Add store hours for the café to help with people ordering from their phone on the way to church`),
				LGL(`Add multiple taxes`),
			],
		},
		{
			name: `Wave Services`,
			description: `Organize services with a detailed plan`,
			features: [
				AL(`Manage unlimited services across multiple locations`),
				AL(`Support multiple service and rehearsal times for each service`),
				AL(`Manage order of service and item length, assign items to different team and roles`),
				AL(`Set service teams, roles and required skills then let UCare assign the right people`),
				GLS(`Multi-service planner to speed up service order management and volunteer assignment`),
				GLS(`Live Services to facilitate team communication and service timings`),
			],
		},
		{
			name: `Wave Teams`,
			description: `Schedule people across all your teams and services`,
			features: [
				AL(`Manage unlimited teams across multiple locations`),
				AL(`Assign people based on their team skills and location`),
				AL(`Schedule volunteers based on their preferences, block-out dates, conflicts and declines.`),
				AL(`Email and SMS position requests`),
				AL(`Set automatic reminder preferences per team and service time`),
				GLS(`Enable volunteer decline mode or ask them to find their own replacement`),
				GLS(`Manage your own songs or import from SongSelect`),
				GLS(`Organize and attach files to services, teams and positions`),
			],
		},
		{
			name: `Wave Analytics`,
			description: `Reporting reimagined`,
			features: [
				GLS(`Create and publish unlimited dashboards and reports`),
				GLS(`Build dashboards and reports using the Microsoft Power BI Desktop app`),
			],
		},
		{
			name: `Wave Automation Studio`,
			description: `Work smarter not harder`,
			features: [
				GLS(`Automate multi-step actions based on activity triggers`),
				GLS(`Automate multi-step actions based on polling conditions`),
			],
		},
		{
			name: `Wave Graph API`,
			description: `Extend UCare for your custom needs`,
			features: [
				AL(`Query and mutate the graph using GraphQL`),
				AL(`Subscribe to realtime changes in the graph`),
				AL(`Use the GraphQL playground to test your ideas`),
			],
		},
		{
			name: `Access Control`,
			description: `Limit access to sensitive info`,
			features: [
				All(`Easy to use access management`),
				All(
					`Security areas for restricting access to sensitive info. For example notes, contact info, custom dates & fields, groups, forms, processes, etc.`
				),
				GL(
					`Fine grained access management. Grant permission to View, Create, Edit, Delete specific data`,
					`Coming 2020`
				),
				GL(`Create and manage access Roles`, `Coming 2020`),
				GL(`Assign fine grained permissions based on Roles`, `Coming 2020`),
			],
		},
		{
			name: `Support & Onboarding`,
			description: `Experts that care`,
			features: [
				All(`CSV data import assistance`),
				All(`Data migration`, `Add on`),
				All(`Online help center`),
				All(`Email based technical support`),
				Values(`Email based coaching`, `Limited`, <NA />, <Yes />, <Yes />),
				GL(`Monthly Webinars`),
				GL(`Tailored Coaching and Masterclasses`, `Add on`),
				GL(`Implementation specialists`, `Add on`),
				GL(`Phone support`, `Add on`),
			],
		},
		{
			name: `Other features`,
			description: ``,
			features: [
				All(`Assign tasks that anyone can complete from their email inbox, no password required`),
				All(`Flexible data import & export; including unlimited custom fields`),
				All(`UCare mobile app is supported on iOS 10+ and Android 5+`),
				All(`Touch ID or pin-code security so sensitive info isn’t easily accessed by others on your phone`),
				All(
					`Supported on any internet connected device with a recent version of Google Chrome, Safari, Firefox and Edge+`
				),
				All(`Encrypted internet connection to protect all data`),
				All(`Optimized for low bandwidth internet`),
				All(`All UCare activity is fully audited for data privacy reporting needs`),
				Values(`Multi-site`, `5 sites included`, <NA />, `5 sites included`, `Unlimited`),
				Values(`Bandwidth`, `25 GB included`, `10 GB included`, `25 GB included`, `100 GB included`),
				All(`Extra Bandwidth`, `$25/100 GB`),
				L(`Guaranteed 99.9% SLA- The industry’s best uptime SLAs with service credits`),
				Values(`Encrypted data backup`, `Hourly`, `Daily`, `Hourly`, `Continual`),
			],
		},
	] as FeatureSet[];
}
