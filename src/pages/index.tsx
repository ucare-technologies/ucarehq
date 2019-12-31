import React from 'react';

import ChurchManagement from '../components/home/church';
import Management from '../components/home/management';
import Features from '../components/home/features';
import Devices from '../components/home/devices';
// import Testimonials from '../components/home/testimonials';
import WaveUpgrade from '../components/home/upgrade';
import Ministry from '../components/home/ministry';
import LatestBlog from '../components/blogs/latest-blog';
import SEO from '../components/seo';
import Layout from '../components/layout';

//import './index.scss';

const IndexPage: React.FC = () => (
	<Layout>
		{(menuOpen, handleClick) => (
			<>
				<SEO title='Church management software simplified' />
				<ChurchManagement menuOpen={menuOpen} onClick={handleClick} />
				<Management />
				<Features />
				<Devices />
				<WaveUpgrade />
				<Ministry />
				<LatestBlog />
			</>
		)}
	</Layout>
);
export default IndexPage;
