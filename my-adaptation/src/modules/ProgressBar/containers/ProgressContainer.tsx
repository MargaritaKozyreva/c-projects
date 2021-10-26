import React from 'react';
import Header from '../components/Header';
import Steps from '../components/Steps';

interface Props {}

const ProgressContainer: React.FC<Props> = (props) => {
	return (
		<Header>
			<Steps />
		</Header>
	);
};

export default ProgressContainer;
