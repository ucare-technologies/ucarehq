// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { useScript } from '../use-script';
import FieldError from './field-error';

const turnstileScriptUrl = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

const CaptchaField: React.FC<{
	siteKey: string;
	error?: string;
	resetCounter: number;
	onChange: (token: string) => void;
}> = ({ siteKey, error, resetCounter, onChange }) => {
	const containerRef = React.useRef<HTMLDivElement | null>(null);
	const widgetIdRef = React.useRef<string | null>(null);
	const previousResetCounter = React.useRef(resetCounter);
	const { loaded, error: scriptError } = useScript(turnstileScriptUrl);

	React.useEffect(() => {
		if (!siteKey || !loaded || scriptError || widgetIdRef.current || !containerRef.current || !window.turnstile) {
			return;
		}
		widgetIdRef.current = window.turnstile.render(containerRef.current, {
			sitekey: siteKey,
			callback: token => onChange(token),
			'expired-callback': () => onChange(''),
			'error-callback': () => onChange(''),
		});
	}, [siteKey, loaded, scriptError, onChange]);

	React.useEffect(() => {
		if (previousResetCounter.current === resetCounter) {
			return;
		}
		previousResetCounter.current = resetCounter;
		if (!widgetIdRef.current || !window.turnstile) {
			return;
		}
		window.turnstile.reset(widgetIdRef.current);
		onChange('');
	}, [resetCounter, onChange]);

	React.useEffect(
		() => () => {
			if (widgetIdRef.current && window.turnstile) {
				window.turnstile.remove(widgetIdRef.current);
			}
		},
		[]
	);

	return (
		<div>
			<h6>Security check*</h6>
			{!siteKey && <FieldError>Captcha is unavailable right now. Please try again later.</FieldError>}
			{!!siteKey && <div className='captcha-widget' ref={containerRef} />}
			{scriptError && <FieldError>Captcha failed to load. Please disable blockers and refresh.</FieldError>}
			<FieldError>{error}</FieldError>
		</div>
	);
};

export default CaptchaField;
