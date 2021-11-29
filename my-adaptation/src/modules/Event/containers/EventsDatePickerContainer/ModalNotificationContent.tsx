import React from 'react';
import Button from '@ui/components/Button';
import moment from 'moment';
import Modal from '@modules/Modal/containers/ModalContainer';
import 'moment/locale/ru';
import { useDispatch } from 'react-redux';
import { modalActions } from '@modules/Modal/redux/ModalSlices';
import { H3, P } from '@ui/components/Typography';

const ModalNotificationContent = (props: any) => {
	const { eventInfo } = props;
	const dispatch = useDispatch();

	// console.log(eventInfo); Тоже происходит два рендера, посмотреть!
	const date = moment(eventInfo.date).format('DD.MM.YYYY');
	const time = moment(eventInfo.date).format('HH:mm');
	return (
		<>
			<Modal.Body>
				<div className="container-notification">
					<div className="circle-avatar" />
					<H3>Вы успешно записаны на мероприятие:</H3>
					<H3>{ eventInfo.name }</H3>
					<br />
					<P>Дата: { date }</P>
					<P>Начало в { time }</P>
					{ eventInfo.adress && <p>Адрес: { eventInfo.adress }</p> }
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

export default ModalNotificationContent;
