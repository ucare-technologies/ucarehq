// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';

import { handleLinkClick } from '../../utils/handleLinkClick';
import { FadeIn } from '../fade-in';
import * as styles from './devices.module.scss';

export const Devices: React.FC<{
	firstImage?: IGatsbyImageData | null;
	secondImageUrl: string;
	thirdImageUrl: string;
	titleHtml: string;
	descriptionHtml: string;
}> = ({ firstImage, secondImageUrl, thirdImageUrl, titleHtml, descriptionHtml }) => {
	const devicesImage = firstImage && getImage(firstImage);
	return (
		<section className={`container-fluid ${styles.devices}`}>
			<div className='row'>
				<div className={`col-lg-6 col-md-6 ${styles.wrapper}`}>
					<FadeIn fade='left'>
						<h2
							dangerouslySetInnerHTML={{
								__html: titleHtml.replace(/\n/g, '<br>'),
							}}
						/>

						<div dangerouslySetInnerHTML={{ __html: descriptionHtml }} onClick={handleLinkClick} />
					</FadeIn>
				</div>
				<div className={`col-lg-6 col-md-6 ${styles.photo}`}>
					<FadeIn fade='right'>
						{!!devicesImage && (
							<GatsbyImage image={devicesImage} alt='devices' loading='lazy' style={{ overflow: 'visible' }} />
						)}
					</FadeIn>
				</div>
			</div>
			<FadeIn className={`container ${styles.buttons}`} fade='up'>
				<div className='col-md-6 text-center'>
					<a href='https://itunes.apple.com/us/app/ucare./id905961512?mt=8' target='_blank' rel='noopener noreferrer'>
						<img src={secondImageUrl} alt='Download on the AppStore' loading='lazy' className='button-center' />
					</a>
				</div>
				<div className='col-md-6 text-center'>
					<a
						href='https://play.google.com/store/apps/details?id=com.ucareapp.app'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={thirdImageUrl} alt='Get it on Google Play' loading='lazy' className='button-center' />
					</a>
				</div>
			</FadeIn>
		</section>
	);
};
