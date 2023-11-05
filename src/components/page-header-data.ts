type FeaturePageHeaderSection = Pick<
	Queries.FeaturePageBannerSectionFragment,
	'background_image' | 'rich_title' | 'description'
> & {
	slice_name: 'feature_page_banner';
};
export function isFeatureHeader(item: Slice): item is FeaturePageHeaderSection {
	return item.slice_name === 'feature_page_banner';
}
// TODO: remove
export type PageHeaderData =
	| FeaturePageHeaderSection
	| {
			slice_name:
				| 'sign_up_page_banner'
				| 'price_page_banner'
				| 'wave_page_banner'
				| 'blog_banner'
				| 'feature_banner'
				| 'terms_banner'
				| 'sla_banner'
				| 'privacy_banner'
				| 'gdpr_banner';
			feature_colour?: string;
			blog_date?: string;
			image?: {
				file: {
					url: string;
				};
			};
			background_image: {
				file: {
					url: string;
				};
			};
			rich_title: {
				childMarkdownRemark: {
					html: string;
				};
			};
			section1_des: {
				childMarkdownRemark: {
					html: string;
				};
			};
	  };
