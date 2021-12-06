import React from 'react';
import Button from '@ui/components/Button';
import moment from 'moment';
import Modal from '@modules/Modal/containers/ModalContainer';
import 'moment/locale/ru';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions, ModalState } from '@modules/Modal/redux/ModalSlices';
import { H3, P } from '@ui/components/Typography';
import { EventDTO } from '@modules/Event/dataContext/EventDTO.dto';
import { useNavigate } from 'react-router';

const EventRegistrationDone: React.FC<any> = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const selectedEventState = useSelector((state: { modal: ModalState }) =>
			state.modal.payload.selectedEvent as EventDTO.IEventCalendar);

	// console.log(event); Тоже происходит два рендера, посмотреть!
	const date = moment(selectedEventState.date).format('DD.MM.YYYY');
	const time = moment(selectedEventState.date).format('HH:mm');
	return (
		<>
			<Modal.Body>
				<div className="container-notification">
					<div className="circle-avatar" />
					<H3>Вы успешно записаны на мероприятие:</H3>
					<H3>{ selectedEventState.name }</H3>
					<br />
					<P>Дата: { date }</P>
					<P>Начало в { time }</P>
					{ selectedEventState.address && (
						<p>Адрес: { selectedEventState.address }</p>
					) }
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div className="container-notification-footer ">
					<Button
						onClick={ () => {
							dispatch(modalActions.hideModal());
							//navigate(`/adaptation/event/${ selectedEventState.id }`);
							navigate('/adaptation/event/6948094666445191687');
						} }
					>
						Понятно
					</Button>
				</div>
			</Modal.Footer>
		</>
	);
};

export default EventRegistrationDone;
