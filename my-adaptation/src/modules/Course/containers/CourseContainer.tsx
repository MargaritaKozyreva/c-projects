import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import { courseActions, CourseState } from '../redux/CourseSlices';
import { CourseDTO } from '../dataContext/CourseDTO.dto';
import './styles.scss';

interface CourseContainerProps {
	courseId: string | undefined;
}

export const CourseContainer: React.FC<CourseContainerProps> = (props) => {
	const { courseId } = props;
	const dispatch = useDispatch();
	const courseResponse = useSelector((state: { courses: CourseState }) => state.courses);

	console.log(courseResponse)
	useEffect(() => {
		dispatch(courseActions.getCourseByIdPending(String(courseId)));
	}, [dispatch]);

	return (
		<WithSkeleton
			isLoading={ courseResponse.courses.isLoading }
			isEmpty={ courseResponse.courses.entities.length === 0 }
		>
			{ courseResponse.courses.entities.map((course: CourseDTO.ICourse) => {
				return <div key={ course.id }>{ course.title }</div>;
			}) }
		</WithSkeleton>
	);
};
