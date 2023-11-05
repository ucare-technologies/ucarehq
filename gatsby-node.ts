import type { GatsbyNode } from 'gatsby';

import { createBlog } from './src/gatsby/create-pages/create-blog';
import { createFeatures } from './src/gatsby/create-pages/create-features';

export const createPages: GatsbyNode['createPages'] = async args => {
	await createBlog(args);
	await createFeatures(args);
};
