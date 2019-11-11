/* eslint-disable */
const path = require(`path`);
const crypto = require(`crypto`);
const { urlResolve } = require(`gatsby-core-utils`);

const basePath = '/';
const contentPath = 'content/posts';

const mdxResolverPassThrough = fieldName => async (source, args, context, info) => {
	const type = info.schema.getType(`Mdx`);
	const mdxNode = context.nodeModel.getNodeById({ id: source.parent });
	const resolver = type.getFields()[fieldName].resolve;
	const result = await resolver(mdxNode, args, context, { fieldName });
	return result;
};
exports.sourceNodes = ({ actions, schema }) => {
	const { createTypes } = actions;
	createTypes(
		schema.buildObjectType({
			name: `BlogPost`,
			fields: {
				id: { type: `ID!` },
				title: { type: `String!` },
				slug: { type: `String!` },
				date: { type: `Date`, extensions: { dateformat: {} } },
				type: { type: `String` },
				categories: { type: `String` },
				svg_code: { type: `String` },
				feature_colour: { type: `String` },
				featured_image: { type: `File`, extensions: { fileByRelativePath: {} } },

				excerpt: {
					type: `String!`,
					args: {
						pruneLength: {
							type: `Int`,
							defaultValue: 300,
						},
					},
					resolve: mdxResolverPassThrough(`excerpt`),
				},
				body: {
					type: `String!`,
					resolve: mdxResolverPassThrough(`body`),
				},
			},
			interfaces: [`Node`],
		})
	);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const postResults = await graphql(`
		{
			mdxPages: allBlogPost(
				sort: { fields: [date, title], order: DESC }
				limit: 1000
				filter: { type: { eq: "post" } }
			) {
				posts: edges {
					post: node {
						id
						title
						slug
						date(formatString: "D MMMM YYYY")
						excerpt
						type
						categories
						svg_code
						feature_colour
						featured_image {
							publicURL
							relativePath
							childImageSharp {
								fixed {
									originalName
									aspectRatio
									srcSet
									base64
									src
									srcWebp
									srcSetWebp
									width
									height
								}
								fluid {
									originalName
									src
									aspectRatio
									srcSet
									sizes
									base64
									srcWebp
									srcSetWebp
								}
							}
						}
					}
				}
			}
		}
	`);

	if (postResults.errors) {
		reporter.panic(postResults.errors);
	}

	// Create Posts and Post pages.
	const { posts } = postResults.data.mdxPages;

	// Create a page for each Post
	const PostTemplate = require.resolve(`./src/templates/post`);
	posts.forEach(({ post }) => {
		const { slug } = post;
		createPage({
			path: `${basePath}blog${slug}`,
			component: PostTemplate,
			context: {
				...post,
				slug,
			},
		});
	});

	const postsPerPage = 5;
	const numPages = Math.ceil(posts.length / postsPerPage);
	// // Create the Posts page
	const PostsTemplate = require.resolve(`./src/templates/posts`);
	for (let i = 0; i < numPages; i++) {
		createPage({
			path: i === 0 ? `${basePath}blog` : `${basePath}blog/page/${i + 1}`,
			component: PostsTemplate,
			context: {
				posts,
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		});
	}
};

// Create fields for post slugs and source
// This will change with schema customization with work
exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
	const { createNode, createParentChildLink } = actions;

	const toPostPath = node => {
		const { dir } = path.parse(node.relativePath);
		return urlResolve(basePath, dir);
	};

	// Make sure it's an MDX node
	if (node.internal.type !== `Mdx`) {
		return;
	}

	// Create source field (according to contentPath)
	const fileNode = getNode(node.parent);
	const source = fileNode.sourceInstanceName;

	if (node.internal.type === `Mdx` && source === contentPath) {
		const slug = toPostPath(fileNode);

		const fieldData = {
			title: node.frontmatter.title,
			slug,
			date: node.frontmatter.date,
			type: node.frontmatter.type,
			categories: node.frontmatter.categories,
			svg_code: node.frontmatter.svg_code,
			feature_colour: node.frontmatter.feature_colour,
			featured_image: node.frontmatter.featured_image,
			header_alignment: node.frontmatter.header_alignment,
		};
		createNode({
			...fieldData,
			// Required fields.
			id: createNodeId(`${node.id} >>> BlogPost`),
			parent: node.id,
			children: [],
			internal: {
				type: `BlogPost`,
				contentDigest: crypto
					.createHash(`md5`)
					.update(JSON.stringify(fieldData))
					.digest(`hex`),
				content: JSON.stringify(fieldData),
				description: `Blog Posts`,
			},
		});
		createParentChildLink({ parent: fileNode, child: node });
	}
};
