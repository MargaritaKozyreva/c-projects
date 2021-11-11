import React from 'react';
import ProgressContainer from '../modules/ProgressBar/containers/ProgressContainer';
import LearnTableContainer from '../modules/LearnTable/containers/LearnTableContainer';

const Main = () => {
	return (
		<div>
			<ProgressContainer />
			<LearnTableContainer />
		</div>
	);
};

export { Main };
