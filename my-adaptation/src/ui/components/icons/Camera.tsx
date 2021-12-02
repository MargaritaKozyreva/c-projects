import React, { SVGAttributes } from 'react';

export interface CameraProps extends SVGAttributes<SVGElement> {
	[key: string]: any;
	size?: 'xs' | 's' | 'm' | 'l' | 'xl';
	color?: string;
	className?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
const Camera: React.FC<CameraProps> = (props): JSX.Element => {
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
				d="M13.0504 7.00024H5.75055C4.78775 7.00024 4 7.78796 4 8.75071V14.6498C4 15.6126 4.78775 16.4003 5.75055 16.4003H13.0504C14.0132 16.4003 14.8009 15.6126 14.8009 14.6498V8.75071C14.8009 7.77045 14.0132 7.00024 13.0504 7.00024Z"
				fill="#50565E"
			/>
			<path
				d="M18.7046 7.96301C18.5996 7.98051 18.4945 8.03303 18.407 8.08554L15.6761 9.66097V13.7221L18.4245 15.2975C18.9322 15.5951 19.5624 15.42 19.86 14.9124C19.9475 14.7548 20 14.5798 20 14.3872V8.97828C20 8.33061 19.3873 7.80547 18.7046 7.96301Z"
				fill="#50565E"
			/>
		</svg>
	);
};

Camera.defaultProps = {
	size: 'm',
	color: 'currentColor'
};

Camera.displayName = 'Camera';
export default Camera ;
