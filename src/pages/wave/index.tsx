// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import WaveVideo from '../../components/wave/wave-video';
import Hero from '../../components/wave/hero';
import FAQ from '../../components/wave/faq';
import Features from '../../components/wave/features';
import SEO from '../../components/seo';
import Layout from '../../components/layout';

const IndexPage: React.FC = () => {
	const [autoPlay, setAutoPlay] = React.useState(false);
	const handlePlayClick = React.useCallback(() => setAutoPlay(true), [setAutoPlay]);
	return (
		<Layout>
			<SEO title='UCare Wave' />
			<Hero onPlayClick={handlePlayClick} />
			<WaveVideo autoPlay={autoPlay} />
			<Features />
			<FAQ />
		</Layout>
	);
};
export default IndexPage;
