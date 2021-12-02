import React, { SVGAttributes } from 'react';

export interface LaptopProps extends SVGAttributes<SVGElement> {
	[key: string]: any;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: string;
	className?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Laptop: React.FC<LaptopProps> = (props): JSX.Element => {
	const { color = 'currentColor', size = 'm', ...attrs } = props;
	const d = sizes[size] || size;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={ d }
			height={ d }
			fill={ color }
			{ ...attrs }
		>
			<path
				d="M19.8753 17.2422L18.5258 15.4296H5.4742L4.1247 17.2422C3.81802 17.6542 4.11202 18.2396 4.62562 18.2396H19.3744C19.888 18.2396 20.182 17.6542 19.8753 17.2422Z"
				fill="#50565E"
			/>
			<path
				d="M18.5258 7.24926C18.5258 6.55953 17.9666 6.00037 17.2769 6.00037H6.72317C6.0334 6.00037 5.47421 6.55953 5.47421 7.24926V14.4929H18.5258V7.24926ZM13.2802 8.18594H10.7198C10.4612 8.18594 10.2515 7.97625 10.2515 7.7176C10.2515 7.45895 10.4612 7.24926 10.7198 7.24926H13.2802C13.5389 7.24926 13.7486 7.45895 13.7486 7.7176C13.7486 7.97625 13.5389 8.18594 13.2802 8.18594Z"
				fill="#50565E"
			/>
		</svg>
	);
};

Laptop.defaultProps = {
	size: 'm',
	color: 'currentColor'
};

Laptop.displayName = 'Laptop';
export default Laptop;
