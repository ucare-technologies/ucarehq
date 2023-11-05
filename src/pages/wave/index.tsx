import React from 'react';

import { HeadFC, PageProps, graphql } from 'gatsby';

import { FAQ } from '../../components/faq';
import { HeadTags } from '../../components/head-tags';
import { Layout } from '../../components/layout';
import { Slice, isSlice } from '../../components/slice';
import { Features } from '../../components/wave/features';
import { Hero } from '../../components/wave/hero';
import { WaveVideo } from '../../components/wave/wave-video';
import { trimPTag } from '../../utils/trimTag';

const WavePage: React.FC<PageProps<Queries.WavePageQuery>> = ({ data }) => {
	const [autoPlay, setAutoPlay] = React.useState(false);
	const handleClick = React.useCallback(() => setAutoPlay(true), [setAutoPlay]);
	const sections = (data?.page?.sections ?? []).filter(isSlice);
	return (
		<>
			<Layout>
				{sections.filter(isBannerSection).map((item, index) => (
					<Hero
						key={index}
						backgroundImageUrl={item.background_image?.file?.url || ''}
						titleHtml={trimPTag(item.rich_title?.childMarkdownRemark?.html)}
						onPlayClick={handleClick}
					/>
				))}
				<WaveVideo autoPlay={autoPlay} />
				{sections.filter(isCardSection).map((item, index) =>
					item.slice_name === 'wave_features' ? (
						<Features
							key={index}
							cards={(item.cards ?? []).filter(Boolean).map(c => ({
								name: c!.card_name || '',
								title: c!.title || '',
								cardImageUrl: c!.card_image?.file?.url || '',
								descriptionHtml: c!.long_description?.childMarkdownRemark?.html || '',
							}))}
						/>
					) : (
						<FAQ
							key={index}
							title={item.title || ''}
							cards={(item.cards ?? []).filter(Boolean).map(c => ({
								title: c!.title || '',
								descriptionHtml: c!.long_description?.childMarkdownRemark?.html || '',
							}))}
						/>
					)
				)}
			</Layout>
		</>
	);
};

export default WavePage;
export const Head: HeadFC<Queries.WavePageQuery> = ({ data }) => (
	<HeadTags title={data.page?.page_title || 'UCare Wave'} />
);

function isBannerSection(item: Slice): item is Queries.WaveBannerSectionFragment {
	return item.slice_name === 'wave_page_banner';
}
function isCardSection(item: Slice): item is Queries.WaveCardSectionFragment {
	return item.slice_name === 'wave_features' || item.slice_name === 'frequently_asked_questions';
}
export const pageQuery = graphql`
	query WavePage {
		page: contentfulPage(slug: { eq: "/wave" }) {
			page_title
			sections {
				... on ContentfulBannerSection {
					...WaveBannerSection
				}
				... on ContentfulCardSection {
					...WaveCardSection
				}
			}
		}
	}
	fragment WaveBannerSection on ContentfulBannerSection {
		slice_name
		rich_title {
			childMarkdownRemark {
				html
			}
		}
		background_image {
			file {
				url
			}
		}
		image {
			file {
				url
			}
		}
		button_text
	}
	fragment WaveCardSection on ContentfulCardSection {
		slice_name
		title
		cards {
			title
			card_name
			long_description {
				childMarkdownRemark {
					html
				}
			}
			card_image {
				gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED, quality: 80)
				file {
					url
				}
			}
		}
	}
`;
