import React from 'react';

import { HeadFC, PageProps } from 'gatsby';

import { AllPosts } from '../components/blogs/posts';
import { HeadTags } from '../components/head-tags';

export type BlogPageContextType = {
	blogsPageData: Queries.AllBlogsContentFragment;
	currentPage: number;
	limit: number;
};
const PostsPages: React.FC<PageProps<object, BlogPageContextType>> = ({ pageContext }) => <AllPosts {...pageContext} />;
export default PostsPages;
export const Head: HeadFC<object, BlogPageContextType> = ({ pageContext: { currentPage, blogsPageData } }) => {
	const isFirst = currentPage === 1;
	const title = blogsPageData.all_blog_section || 'Blog';
	return <HeadTags title={isFirst ? title : `${title} | Page ${currentPage}`} />;
};
