// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { FadeIn } from '../fade-in';
import * as styles from './features.module.scss';
import { WaveLogo } from './wave-logo';
import { WaveSection } from './wave-section';
import { WaveHeart } from './waveheart-white';

// TODO: css & <GatsbyImage
export const Features: React.FC<{
	cards: {
		name: string;
		title: string;
		descriptionHtml: string;
		cardImageUrl: string;
	}[];
}> = ({ cards }) => (
	<div className={styles.container}>
		{cards.map(item => {
			switch (item.name) {
				case 'Wave Feature Card':
					return (
						<div className={`container-fluid ${styles.logo}`} key={item.name}>
							<div className={`container text-center`}>
								<FadeIn fade='up'>
									<WaveLogo />
								</FadeIn>
								<FadeIn fade='up' className={`col-lg-8 mx-auto pt-5 text-left ${styles.textBlock}`}>
									<div dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
								</FadeIn>
							</div>
						</div>
					);
				case 'Analytics Wave Feature Card':
					return (
						<div className={`container-fluid ${styles.analytics}`} key={item.name}>
							<WaveSection d={4} alt />
							<div className={`container ${styles.container2}`}>
								<FadeIn fade='up'>
									<h2>{item.title}</h2>
								</FadeIn>
								<div className='row pt-5'>
									<div className='col-lg-9 mx-lg-auto col-xl-6 align-self-center'>
										<FadeIn fade='left' className={`${styles.textBlock} ${styles.block}`}>
											<div dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
										</FadeIn>
									</div>
									<div className='col-xl-6 pl-xl-5 align-self-center'>
										<FadeIn fade='right'>
											<img src={item.cardImageUrl} alt={item.title} className={`rounded-lg ${styles.shadow}`} />
										</FadeIn>
									</div>
								</div>
							</div>
							<WaveSection d={1} />
							<WaveHeart className={`${styles.delay1} ${styles.analyticsSvg}`} />
						</div>
					);
				case 'Automation Studio Wave Feature Card':
					return (
						<div className={`container-fluid ${styles.automation}`} key={item.name}>
							<FadeIn fade='up'>
								<div className={`${styles.centeredImage} mx-auto`}>
									<img src={item.cardImageUrl} alt={item.title} />
								</div>
								<div className='container'>
									<h2>{item.title}</h2>
									<div className='row pt-5'>
										<div className={`col-lg-8 mx-auto ${styles.textBlock}`}>
											<div dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
										</div>
									</div>
								</div>
							</FadeIn>
						</div>
					);
				case 'Services & Teams Wave Feature Card':
					return (
						<div className={`container-fluid ${styles.services}`} key={item.name}>
							<WaveSection d={0} alt />
							<div className={`container ${styles.container2}`}>
								<FadeIn fade='up'>
									<h2>{item.title}</h2>
								</FadeIn>
								<div className='row pt-5'>
									<div className='col-lg-9 mx-lg-auto col-xl-6 align-self-center'>
										<FadeIn fade='left' className={`${styles.textBlock} ${styles.block}`}>
											<div
												dangerouslySetInnerHTML={{
													__html: item.descriptionHtml,
												}}
											/>
										</FadeIn>
									</div>
									<div className='col-xl-6 pl-xl-5 align-self-center'>
										<FadeIn fade='right'>
											<img src={item.cardImageUrl} alt={item.title} className={`rounded-lg ${styles.shadow}`} />
										</FadeIn>
									</div>
								</div>
							</div>
							<WaveSection d={3} />
							<WaveHeart className={`${styles.servicesSvg}`} />
						</div>
					);
				case 'Security Wave Feature Card':
					return (
						<div className={`container-fluid ${styles.security}`} key={item.name}>
							<FadeIn fade='up'>
								<div className={`${styles.centeredImage} mx-auto`}>
									<img src={item.cardImageUrl} alt={item.title} />
								</div>
								<div className='container'>
									<h2>{item.title}</h2>
									<div className='row pt-5'>
										<div className={`col-lg-8 mx-auto ${styles.textBlock}`}>
											<div dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
										</div>
									</div>
								</div>
							</FadeIn>
						</div>
					);
				case 'Check-in Wave Feature Card':
					return (
						<div className={`container-fluid ${styles.checkIn}`} key={item.name}>
							<WaveSection d={2} alt />
							<div className={`container ${styles.container2}`}>
								<FadeIn fade='up'>
									<h2>{item.title}</h2>
								</FadeIn>
								<div className='row pt-5'>
									<div className='col-lg-9 mx-lg-auto col-xl-6 align-self-center'>
										<FadeIn fade='left' className={`${styles.textBlock} ${styles.block}`}>
											<div dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
										</FadeIn>
									</div>
									<div className='col-xl-6 pl-xl-5 align-self-center'>
										<FadeIn fade='right'>
											<img src={item.cardImageUrl} alt={item.title} className={`rounded-lg ${styles.shadow}`} />
										</FadeIn>
									</div>
								</div>
							</div>
							<WaveSection d={5} />
							<WaveHeart className={`${styles.delay2} ${styles.checkInSvg}`} />
						</div>
					);
				case 'Forms Wave Feature Card':
					return (
						<div className={`container-fluid ${styles.forms}`} key={item.name}>
							<FadeIn fade='up'>
								<div className={`${styles.centeredImage} mx-auto`}>
									<img src={item.cardImageUrl} alt={item.title} />
								</div>
								<div className='container'>
									<h2>{item.title}</h2>
									<div className='row pt-5'>
										<div className={`col-lg-8 mx-auto ${styles.textBlock}`}>
											<div dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
										</div>
									</div>
								</div>
							</FadeIn>
						</div>
					);
			}
			return null;
		})}
	</div>
);
