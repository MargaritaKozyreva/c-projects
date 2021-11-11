import React, { ReactNode } from 'react';
export type WithSkeletonProps = {
	readonly isLoading: boolean;
	readonly isEmpty: boolean;
	readonly error?: React.ReactNode | string;

	readonly skeletonSlot?: ReactNode;
	readonly emptySpaceSlot?: ReactNode;
};

export const WithSkeleton: React.FC<WithSkeletonProps> = (props) => {
	const { isLoading, isEmpty, error, skeletonSlot, emptySpaceSlot, children } =
		props;
	if (!isEmpty && !isLoading && !error) {
		return <>{ children }</>;
	}

	if (isLoading) {
		return <>{ skeletonSlot || 'is loading....' }</>;
	}

	if (!isLoading && !error && isEmpty) {
		return <>{ emptySpaceSlot || 'no data provided' }</>;
	}

	return <>error</>;
};
