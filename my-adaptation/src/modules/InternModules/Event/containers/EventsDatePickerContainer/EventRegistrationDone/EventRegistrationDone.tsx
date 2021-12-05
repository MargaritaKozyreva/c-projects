import React from 'react';
import Button from '@ui/components/Button';
import moment from 'moment';
import Modal from '@modules/Modal/containers/ModalContainer';
import 'moment/locale/ru';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions, ModalState } from '@modules/Modal/redux/ModalSlices';
import { H3, P } from '@ui/components/Typography';
import { EventDTO } from '@modules/InternModules/Event/dataContext/EventDTO.dto';
import { EventCalendarState } from '@modules/InternModules/Event/redux/EventCalendarSlices';
import { WithSkeleton } from '@ui/components/WithSkeleton';

interface Props {
	selectedEvent: EventDTO.IEventCalendar;
}

const EventRegistrationDone: React.FC<any> = (props) => {
	const dispatch = useDispatch();
	const state = useSelector((state: { modal: ModalState }) =>
			state.modal.payload.selectedEvent as EventDTO.IEventCalendar);

	// console.log(event); Тоже происходит два рендера, посмотреть!
	const date = moment(state.date).format('DD.MM.YYYY');
	const time = moment(state.date).format('HH:mm');
	return (
		<>
			<Modal.Body>
				<div className="container-notification">
					<div className="circle-avatar" />
					<H3>Вы успешно записаны на мероприятие:</H3>
					<H3>{ state.name }</H3>
					<br />
					<P>Дата: { date }</P>
					<P>Начало в { time }</P>
					{ state.address && <p>Адрес: { state.address }</p> }
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div className="container-notification-footer ">
					<Button onClick={ () => dispatch(modalActions.hideModal()) }>
						Понятно
					</Button>
				</div>
			</Modal.Footer>
		</>
	);
};

export default EventRegistrationDone;
