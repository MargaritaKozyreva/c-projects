import LearnTableContainer from '@modules/LearnTable/containers/LearnTableContainer';
import { Page } from '@ui/components/Page';
import React from 'react';

const EducationPage: React.FC = () => {
	return (
		<Page title="Программа обучения">
			<LearnTableContainer />
		</Page>
	);
};

export { EducationPage };
