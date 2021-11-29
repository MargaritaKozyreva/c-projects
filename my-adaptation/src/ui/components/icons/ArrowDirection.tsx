import React, { SVGAttributes } from 'react';

export interface ArrowDownProps extends SVGAttributes<SVGElement> {
	[key: string]: any;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	direction?: 'right' | 'left' | 'up' | 'down';
	color?: string;
	className?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ArrowDirection: React.FC<ArrowDownProps> = (props): JSX.Element => {
	const {
		color = 'currentColor',
		size = 'm',
		direction = 'up',
		...attrs
	} = props;
	const d = sizes[size] || size;

	return (
		<svg
			style={ {
				transform:
					direction === 'up'
						? 'rotate(90deg)'
						: direction === 'down'
							? 'rotate(-90deg)'
							: direction === 'right'
								? 'rotate(180deg)'
								: direction === 'left'
									? 'rotate(360deg)'
									: 'none'
			} }
			width={ d }
			height={ d }
			viewBox="0 0 24 24"
			fill={ color }
			{ ...attrs }
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M16.7068 4.29363C16.8943 4.4813 16.9996 4.73581 16.9996 5.00118C16.9996 5.26655 16.8943 5.52106 16.7068 5.70873L10.4138 12.0067L16.7068 18.3046C16.8889 18.4933 16.9897 18.7461 16.9875 19.0085C16.9852 19.2709 16.88 19.5219 16.6946 19.7075C16.5092 19.893 16.2584 19.9983 15.9962 20.0006C15.734 20.0029 15.4814 19.902 15.2928 19.7197L8.29279 12.7142C8.10532 12.5265 8 12.272 8 12.0067C8 11.7413 8.10532 11.4868 8.29279 11.2991L15.2928 4.29363C15.4803 4.10601 15.7346 4.00061 15.9998 4.00061C16.265 4.00061 16.5193 4.10601 16.7068 4.29363Z"
				fill="#222429"
			/>
		</svg>
	);
};

ArrowDirection.defaultProps = {
	size: 'm',
	color: 'currentColor'
};

ArrowDirection.displayName = 'ArrowDirection';
export default ArrowDirection;
