import { CourseContainer } from '@modules/Course/containers/CourseContainer';
import { Page } from '@ui/components/Page';
import React from 'react';
import { useParams } from 'react-router';

const CoursePage: React.FC = () => {
	const { id } = useParams();
	console.log(id)
	return (
		<Page title="Курс">
			<CourseContainer courseId={ id } />
		</Page>
	);
};

export { CoursePage };
