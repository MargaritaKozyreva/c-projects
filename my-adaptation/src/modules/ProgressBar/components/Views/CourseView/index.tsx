import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import { CourseState } from '@modules/Course/redux/CourseSlices';

export const CourseView: React.FC = () => {
	const state = useSelector((state: { courses: CourseState }) => state.courses);

	return (
		<>
			<WithSkeleton
				isLoading={ state.courses.isLoading }
				isEmpty={ state.courses.entities.length === 0 }
			>
				<h1 className="c-header">{ state.courses.entities[0]?.title || '' }</h1>
			</WithSkeleton>
		</>
	);
};
