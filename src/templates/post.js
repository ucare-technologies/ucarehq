import React from 'react';
import { graphql } from 'gatsby';

import Post from '../components/blogs/post';

export default ({ pageContext: { previous, next }, location, data }) => (
	<Post data={data} location={location} previous={previous} next={next} />
);

export const postQuery = graphql`
	query PostQuery($id: String!) {
		post: blogPost(id: { eq: $id }) {
			id
			title
			date(formatString: "D MMMM YYYY")
			excerpt
			body
			featured_image {
				publicURL
			}
		}
		site: site {
			siteMetadata {
				title
			}
		}
	}
`;
