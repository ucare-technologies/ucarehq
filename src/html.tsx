/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/no-danger */
import React from 'react';

interface HtmlProps {
	htmlAttributes: JSX.IntrinsicElements['html'];
	headComponents: React.ReactNode[];
	bodyAttributes: JSX.IntrinsicElements['body'];
	preBodyComponents: React.ReactNode[];
	body: string;
	postBodyComponents: React.ReactNode[];
}
const HTML: React.FC<HtmlProps> = props => (
	<html {...props.htmlAttributes}>
		<head>
			<meta charSet='utf-8' />
			<meta httpEquiv='x-ua-compatible' content='ie=edge' />
			<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
			{props.headComponents}
		</head>
		<body {...props.bodyAttributes}>
			{props.preBodyComponents}
			<div key='body' id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
			{props.postBodyComponents}
			<link href='https://fonts.googleapis.com/css?family=Lato:300&display=swap' rel='stylesheet' type='text/css' />
			<script
				id='ze-snippet'
				src='https://static.zdassets.com/ekr/snippet.js?key=05724a57-ce2d-477c-8e44-fad5854f9c4f'
				async
				defer
			/>
		</body>
	</html>
);
export default HTML;
