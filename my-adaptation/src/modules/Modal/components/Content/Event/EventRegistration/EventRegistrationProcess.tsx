import EventsDatePickerContainer from '@modules/Event/containers/EventsDatePickerContainer';
import Modal from '@modules/Modal/containers/ModalContainer';
import { modalActions } from '@modules/Modal/redux/ModalSlices';
import Button from '@ui/components/Button';
import React from 'react';
import { useDispatch } from 'react-redux';

const EventRegistrationProcess: React.FC<any> = (props) => {
	const dispatch = useDispatch();

	return (
		<>
			<Modal.Header>Header111</Modal.Header>
			<EventsDatePickerContainer />
		</>
	);
};

export default EventRegistrationProcess;
