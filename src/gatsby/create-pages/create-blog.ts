import type { CreatePagesArgs } from 'gatsby';
import { resolve } from 'path';

export async function createBlog({ actions, graphql }: CreatePagesArgs) {
	const { createPage } = actions;
	const result = await graphql<Queries.AllBlogsQuery>(`
		query AllBlogs {
			results: allContentfulAllBlogs {
				edges {
					node {
						...AllBlogsContent
					}
				}
			}
		}

		fragment AllBlogsContent on ContentfulAllBlogs {
			slice_name
			all_blog_section
			all_blogs_banner_section {
				...AllBlogsBannerSection
			}
			single_blogs {
				...AllBlogsCard
			}
		}

		fragment AllBlogsBannerSection on ContentfulBannerSection {
			rich_title {
				childMarkdownRemark {
					html
				}
			}
			description {
				childMarkdownRemark {
					html
				}
			}
			background_image {
				file {
					url
				}
			}
		}

		fragment AllBlogsCard on ContentfulCard {
			id
			title
			blog_date
			blog_slug
			card_image {
				gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH, quality: 80)
				file {
					url
				}
			}
			long_description {
				childMarkdownRemark {
					html
				}
			}
		}
	`);

	if (result.errors) {
		throw result.errors;
	}

	const resultNode = result?.data?.results?.edges[0]?.node as Queries.AllBlogsContentFragment | undefined;
	const allBlogs = resultNode?.single_blogs ?? [];
	const postTemplate = resolve(`./src/templates/post.tsx`);
	allBlogs.filter(Boolean).forEach(item => {
		createPage({
			path: `/blog/${item!.blog_slug}`,
			component: postTemplate,
			context: {
				slug: item!.blog_slug,
			},
		});
	});

	const postsPerPage = 5;
	const numPages = Math.ceil(allBlogs.length / postsPerPage);
	const basePath = '/';
	const postsTemplate = resolve(`./src/templates/posts.tsx`);
	for (let i = 0; i < numPages; i++) {
		createPage({
			path: i === 0 ? `${basePath}blog` : `${basePath}blog/page/${i + 1}`,
			component: postsTemplate,
			context: {
				blogsPageData: resultNode,
				currentPage: i + 1,
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
			},
		});
	}
}
