/* eslint-disable no-undef */
import React from 'react';

interface YouTubeProps {
	id: string;
}
const YouTubeComponent: React.FC<YouTubeProps> = ({ id }) => {
	const src = `https://www.youtube-nocookie.com/embed/${id}?feature=oembed&autoplay=1&start&end&wmode=opaque&loop=0&controls=1&mute=0&showinfo=1&rel=1&modestbranding=0`;
	return (
		<div
			style={{
				paddingBottom: `${((9 / 16) * 100).toFixed(2)}%`,
				position: 'relative',
				height: 0,
				overflow: 'hidden',
			}}
		>
			<iframe
				src={src}
				className='youtube-iframe'
				allowFullScreen
				title={id}
				style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
			/>
		</div>
	);
};
export default YouTubeComponent;
