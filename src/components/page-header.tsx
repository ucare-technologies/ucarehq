import React from 'react';

import hexToRgba from 'hex-to-rgba';

import { formatDate } from '../utils/convertDateToText';
import { trimPTag } from '../utils/trimTag';
import { CalendarDays } from './icons/calendar-days';
import * as styles from './page-header.module.scss';

export const PageHeader: React.FC<{
	featureColor?: string;
	backgroundImageUrl: string;
	titleHtml: string;
	subTitleHtml?: string;
	imageUrl?: string;
	blog_date?: string;
}> = ({ featureColor, backgroundImageUrl, titleHtml, subTitleHtml, imageUrl, blog_date }) => {
	const background = getBackground(featureColor);
	const backgroundColor = featureColor || 'var(--theme-grey)';
	// TODO: <GatsbyImage
	return (
		<div
			className={`container-fluid p-0 ${styles.wrapper}`}
			style={{
				backgroundImage: `${background},url(${backgroundImageUrl})`,
			}}
		>
			<div
				className={styles.imageBackground}
				style={{
					backgroundColor: backgroundColor,
					opacity: featureColor ? 0.5 : 0,
				}}
			/>

			<div className={`container text-center ${styles.title}`}>
				{!!imageUrl && (
					<div className={styles.bannerIcon}>
						<div>
							<img src={imageUrl} alt='Icon' />
						</div>
					</div>
				)}

				{titleHtml && <h1 dangerouslySetInnerHTML={{ __html: trimPTag(titleHtml) }} />}
				{subTitleHtml && <h3 dangerouslySetInnerHTML={{ __html: trimPTag(subTitleHtml) }} />}

				{!!blog_date && (
					<div>
						<CalendarDays className='mr-2' />
						{formatDate(blog_date)}
					</div>
				)}
			</div>
		</div>
	);
};
function getBackground(featureColor: string | undefined) {
	const rgbaColor = !featureColor
		? 'rgba(var(--theme-greyRGB), 0.5)'
		: featureColor.startsWith('#')
		? hexToRgba(featureColor, 0.5)
		: featureColor;
	return `linear-gradient(${rgbaColor}, ${rgbaColor})`;
}
