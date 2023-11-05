/* eslint-disable jsx-a11y/html-has-lang */

/* eslint-disable react/no-danger */
// eslint-disable-next-line no-use-before-define
import * as React from 'react';

interface HtmlProps {
	htmlAttributes: JSX.IntrinsicElements['html'];
	headComponents: React.ReactNode[];
	bodyAttributes: JSX.IntrinsicElements['body'];
	preBodyComponents: React.ReactNode[];
	body: string;
	postBodyComponents: React.ReactNode[];
}
const HTML: React.FC<HtmlProps> = props => (
	<html lang='en' {...props.htmlAttributes}>
		<head>
			<meta charSet='utf-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
			{props.headComponents}
		</head>
		<body {...props.bodyAttributes}>
			{props.preBodyComponents}
			<div key='body' id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
			{props.postBodyComponents}
		</body>
	</html>
);
export default HTML;
