// eslint-disable-next-line no-use-before-define
import * as React from 'react';

interface YouTubeProps {
	id: string;
	autoPlay?: boolean;
}
const YouTubeComponent: React.FC<YouTubeProps> = ({ id, autoPlay }) => {
	const src = `https://www.youtube-nocookie.com/embed/${id}?feature=oembed&autoplay=${
		autoPlay === false ? 0 : 1
	}&start&end&wmode=opaque&loop=0&controls=1&mute=0&showinfo=1&rel=0&modestbranding=0`;
	const allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
	return (
		<div className='embed-responsive embed-responsive-16by9'>
			<iframe src={src} className='embed-responsive-item' allowFullScreen title={id} frameBorder='0' allow={allow} />
		</div>
	);
};
export default YouTubeComponent;
