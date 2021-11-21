import React, { useEffect } from 'react';
import cn from 'classnames';
import './styles.scss';

export type PageProps = {
	readonly title: string;
	readonly className?: string;
};

export const Page: React.FC<PageProps> = ({
	title,
	className,
	children
}) => {
	useEffect(() => {
		if (typeof document !== 'undefined') {
			document.title = title;
		}
	}, [title]);

	return (
		<>
			<main className={ cn('page', className) } role="main">
				{ children }
			</main>
		</>
	);
};
