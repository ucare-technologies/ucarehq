import { useScript } from './use-script';

export function useCalendly() {
	const { loaded, error } = useScript('https://assets.calendly.com/assets/external/widget.js');
	return { loaded, error, show: showCalendly };
}
function showCalendly(url: string) {
	Calendly.showPopupWidget(
		`${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=323232&primary_color=72be1a`
	);
}
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Calendly {
	function showPopupWidget(url: string): void;
}
