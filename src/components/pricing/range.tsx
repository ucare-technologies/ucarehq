// eslint-disable-next-line no-use-before-define
import * as React from 'react';

import { Range, getTrackBackground } from 'react-range';
import { IThumbProps, ITrackProps } from 'react-range/lib/types';

import * as styles from './range.module.scss';

export const PricingRange: React.FC<{
	value: number;
	onChange: (value: number) => void;
}> = ({ value, onChange }) => {
	const handleChange = React.useCallback((newValues: number[]) => onChange(newValues[0]), [onChange]);
	const renderTrack = React.useCallback(
		({
			props: { onMouseDown, onTouchStart, style, ref },
			children,
		}: {
			props: ITrackProps;
			children: React.ReactNode;
		}) => (
			<div onMouseDown={onMouseDown} onTouchStart={onTouchStart} style={{ ...style }} className={styles.slider}>
				<div
					ref={ref}
					className={styles.background}
					style={{
						background: getTrackBackground({
							values: [value],
							colors: ['rgba(71,83,100,1)', 'rgba(50,58,70,.08)'],
							min,
							max,
						}),
					}}
				>
					{children}
				</div>
			</div>
		),
		[value]
	);
	const renderThumb = React.useCallback(
		({ props, isDragged }: { props: IThumbProps; isDragged: boolean }) => (
			<div
				{...props}
				className={`${styles.thumb} ${isDragged ? styles.dragged : ''}`}
				style={props.style}
				title='Active Profile Slider'
			>
				<div className={styles.thumbInner} />
			</div>
		),
		[]
	);
	return (
		<div className={`pb-5 ${styles.bar}`}>
			<Range
				values={[value]}
				step={10}
				min={min}
				max={max}
				onChange={handleChange}
				renderTrack={renderTrack}
				renderThumb={renderThumb}
			/>
		</div>
	);
};
const min = 100;
const max = 2000;
