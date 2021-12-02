import React, { SVGAttributes } from 'react';

export interface PencilProps extends SVGAttributes<SVGElement> {
	[key: string]: any;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: string;
	className?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Pencil: React.FC<PencilProps> = (props): JSX.Element => {
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
				d="M13.7194 7.35864L15.4027 5.67781L18.3687 8.6479L16.6854 10.3287L13.7194 7.35864Z"
				fill="#50565E"
			/>
			<path
				d="M6.7081 14.3657L13.0494 8.02473L14.2026 9.17786L7.86128 15.5188L6.7081 14.3657Z"
				fill="#50565E"
			/>
			<path
				d="M8.52393 16.1814L14.864 9.84164L16.0159 10.9935L9.67587 17.3333L8.52393 16.1814Z"
				fill="#50565E"
			/>
			<path
				d="M9.01437 17.997L4 19.9994L6.04625 15.0291L9.01437 17.997Z"
				fill="#50565E"
			/>
			<path
				d="M19.5047 7.45881L19.025 7.93847L16.0581 4.96893L16.5365 4.49052C17.3199 3.70756 18.5991 3.93405 19.3303 4.6652C20.15 5.48485 20.2281 6.73541 19.5047 7.45881Z"
				fill="#50565E"
			/>
		</svg>
	);
};

Pencil.defaultProps = {
	size: 'm',
	color: 'currentColor'
};

Pencil.displayName = 'Pencil';
export default Pencil;
