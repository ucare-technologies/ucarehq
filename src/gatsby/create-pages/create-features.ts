import type { CreatePagesArgs } from 'gatsby';
import { resolve } from 'path';

import { Slice, isSlice } from '../../components/slice';

export async function createFeatures({ actions, graphql }: CreatePagesArgs) {
	const { createPage } = actions;
	const result = await graphql<Queries.AllFeaturesQuery>(`
		query AllFeatures {
			page: contentfulPage(slug: { eq: "/features" }) {
				sections {
					... on ContentfulCardSection {
						...AllFeaturesCardSection
					}
				}
			}
		}
		fragment AllFeaturesCardSection on ContentfulCardSection {
			slice_name
			cards {
				...AllFeaturesCard
			}
		}

		fragment AllFeaturesCard on ContentfulCard {
			feature_slug
		}
	`);

	if (result.errors) {
		throw result.errors;
	}

	const slices = result?.data?.page?.sections?.filter(isSlice) ?? [];
	const allFeatureCards = (slices.find(isCardSection)?.cards ?? []).filter(isCard);
	const featureTemplate = resolve(`./src/templates/feature.tsx`);

	if (allFeatureCards.length) {
		for (const post of allFeatureCards) {
			if (post.feature_slug !== null) {
				createPage({
					path: `/features/${post.feature_slug}`,
					component: featureTemplate,
					context: {
						slug: post.feature_slug,
					},
				});
			}
		}
	}
}
function isCardSection(item: Slice): item is Queries.AllFeaturesCardSectionFragment {
	return item.slice_name === 'all_features';
}
function isCard(item: any): item is Queries.AllFeaturesCardFragment {
	return !!item;
}
