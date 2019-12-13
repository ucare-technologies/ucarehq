import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { IThumbProps, ITrackProps } from 'react-range/lib/types';

function px(value: number) {
	return `${value}px`;
}
const highlight = '#475364';
const barHeight = 16;
const min = 100;
const max = 2000;
const PricingRange: React.FC<{ value: number; onChange: (value: number) => void }> = ({ value, onChange }) => {
	const handleRangeChange = React.useCallback((newValues: number[]) => onChange(newValues[0]), [onChange]);
	const values = [value];
	const renderTrack = React.useCallback(
		({
			props: { onMouseDown, onTouchStart, style, ref },
			children,
		}: {
			props: ITrackProps;
			children: React.ReactNode;
		}) => (
			<div onMouseDown={onMouseDown} onTouchStart={onTouchStart} style={{ ...style }} className='pricing-range-slider'>
				<div
					ref={ref}
					className='range-background'
					style={{
						height: px(barHeight),
						borderRadius: px(barHeight / 2),
						paddingBottom: px(barHeight),
						background: getTrackBackground({
							values,
							colors: [highlight, 'rgba(50,58,70,.08)'],
							min,
							max,
						}),
					}}
				>
					{children}
				</div>
			</div>
		),
		[values]
	);
	const renderThumb = React.useCallback(
		({ props, isDragged }: { props: IThumbProps; isDragged: boolean }) => (
			<div
				{...props}
				className='range-thumb'
				style={{
					...props.style,
					height: px(barHeight * 2),
					width: px(barHeight * 2),
					border: '1px solid #ccc',
					borderRadius: px(barHeight),
					backgroundSize: '100%',
					background: '#fff',
					backgroundImage: isDragged
						? 'linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.12))'
						: 'linear-gradient(hsla(0,0%,100%,0),rgba(0,0,0,.1))',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					boxShadow: '0 2px 5px rgba(0,0,0,.2)',
					cursor: 'pointer',
					touchAction: 'pan-y',
					outline: 'none',
				}}
			>
				<div
					style={{
						position: 'absolute',
						top: '40px',
						color: '#fff',
						fontSize: '16px',
						padding: '6px',
						borderRadius: '6px',
						backgroundColor: highlight,
						whiteSpace: 'nowrap',
						boxShadow: '0 2px 5px rgba(0,0,0,.2)',
					}}
				>
					{value >= 2000 ? `${(2000).toLocaleString()}+` : value.toLocaleString()} people
				</div>
				<div
					style={{
						height: px(barHeight),
						width: px(barHeight),
						borderRadius: px(barHeight / 2),
						background: 'linear-gradient(rgba(0,0,0,.13),hsla(0,0%,100%,0))',
					}}
				/>
			</div>
		),
		[value]
	);
	return (
		<div className='pricing-range-bar pb-5'>
			<Range
				values={values}
				step={10}
				min={min}
				max={max}
				onChange={handleRangeChange}
				renderTrack={renderTrack}
				renderThumb={renderThumb}
			/>
		</div>
	);
};
export default PricingRange;
