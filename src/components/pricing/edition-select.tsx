import * as React from 'react';

// import { CalendlyStyle } from '../calendly-style';
// import { Contact } from './contact';
import { Editions, FeatureCardType } from './editions';
import { Estimate } from './estimate';
import { Terms, TermsSelect } from './terms-select';

export const EditionSelect: React.FC<{
	activeProfiles: number;
	titleHtml: string;
	// subTitleHtml: string;
	subDescriptionHtml: string;
	yearlyDiscountPercentage: number;
	cards: FeatureCardType[];
	// calendlyUrl: string;
}> = props => {
	const [terms, setTerms] = React.useState('yearly' as Terms);
	const [value, setValue] = React.useState(undefined as undefined | number);
	const handleTermsChange = React.useCallback((newTerms: Terms) => setTerms(newTerms), [setTerms]);
	const handleValueChange = React.useCallback((newValue: number) => setValue(newValue), [setValue]);
	return (
		<>
			<Estimate titleHtml={props.titleHtml} value={value || props.activeProfiles} onChange={handleValueChange} />
			<TermsSelect
				value={terms}
				yearlyDiscountPercentage={props.yearlyDiscountPercentage}
				onChange={handleTermsChange}
			/>
			<Editions
				value={value}
				terms={terms}
				cards={props.cards}
				yearlyDiscountPercentage={props.yearlyDiscountPercentage}
				// calendlyUrl={props.calendlyUrl}
			/>
			{/* <Contact
				title={props.subTitleHtml}
				description={props.subDescriptionHtml}
				calendlyUrl={props.calendlyUrl}
			/>
			<CalendlyStyle /> */}
		</>
	);
};
