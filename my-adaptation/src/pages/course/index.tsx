import { CourseContainer } from '@modules/InternModules/Course/containers/CourseContainer';
import { Page } from '@ui/components/Page';
import React from 'react';
import { useParams } from 'react-router';

const CoursePage: React.FC = () => {
	const { id } = useParams();
	return (
		<Page title="Курс">
			<CourseContainer courseId={ id } />
		</Page>
	);
};

export { CoursePage };
