import * as React from 'react';
import { Range, getTrackBackground } from 'react-range';
import { IThumbProps, ITrackProps } from 'react-range/lib/types';

const renderThumb = ({ props, isDragged }: { props: IThumbProps; isDragged: boolean }) => (
	<div
		{...props}
		className='range-thumb'
		style={{
			...props.style,
			height: '42px',
			width: '42px',
			border: '1px solid #ccc',
			borderRadius: '20px',
			backgroundSize: '100%',
			background: '#fff',
			backgroundImage: isDragged
				? 'linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.12))'
				: 'linear-gradient(hsla(0,0%,100%,0),rgba(0,0,0,.1))',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			boxShadow: '0 0 5px rgba(0,0,0,.2)',
			cursor: 'pointer',
			touchAction: 'pan-y',
			outline: 'none',
		}}
	>
		<div
			style={{
				height: '20px',
				width: '20px',
				borderRadius: '10px',
				background: 'linear-gradient(rgba(0,0,0,.13),hsla(0,0%,100%,0))',
			}}
		/>
	</div>
);
const PricingRange: React.FC = () => {
	const [values, setValues] = React.useState([100]);
	const value = values[0];
	const handleRangeChange = React.useCallback((newValues: number[]) => setValues(newValues), [setValues]);
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
						height: '20px',
						width: '90%',
						margin: 'auto',
						borderRadius: '10px',
						paddingBottom: '20px',
						background: getTrackBackground({
							values,
							colors: ['#e10332', 'rgba(50,58,70,.08)'],
							min: 100,
							max: 2001,
						}),
					}}
				>
					{children}
				</div>
			</div>
		),
		[values]
	);
	return (
		<>
			<p>
				If you have <span>{value >= 2000 ? '2000+' : value}</span> people in your church
			</p>
			<div className='pricing-range-bar'>
				<Range
					values={values}
					step={10}
					min={100}
					max={2000}
					onChange={handleRangeChange}
					renderTrack={renderTrack}
					renderThumb={renderThumb}
				/>
				<small>Adjust the slider to represent the number of people regularly attending your church</small>
			</div>
			<h6>
				{value / 10 > 200 ? (
					<div className='pricing-total'>
						Please contact <a href='support@ucarehq.com'> support@ucarehq.com</a> for information about our volume
						discounts.
					</div>
				) : (
					<div>
						Your cost would be <span>${value / 10}/month</span>
					</div>
				)}
			</h6>
		</>
	);
};
export default PricingRange;
