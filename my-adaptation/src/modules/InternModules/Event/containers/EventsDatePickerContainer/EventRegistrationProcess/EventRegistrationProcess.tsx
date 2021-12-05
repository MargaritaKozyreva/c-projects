import React, { useEffect, useState } from 'react';
import Modal from '../../../../../Modal/containers/ModalContainer';
import Button from '@ui/components/Button';
import DayPickerSingleDate from '@ui/components/DayPickerSingleDate';
import { useDispatch, useSelector } from 'react-redux';
import {
	modalActions,
	ModalState,
	ModalKey
} from '@modules/Modal/redux/ModalSlices';
import { Chips } from '@ui/components/Chips';
import { EventDTO } from '@modules/InternModules/Event/dataContext/EventDTO.dto';
import { H2, Span } from '@ui/components/Typography';
import {
	eventCalendarActions,
	EventCalendarState
} from '@modules/InternModules/Event/redux/EventCalendarSlices';
import { IconImportant } from '@icons/IconImportant';
import moment from 'moment';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import '../styles.scss';

const EventRegistrationProcess: React.FC<any> = (props) => {
	const dispatch = useDispatch();
	const modalState = useSelector((state: { modal: ModalState }) => state.modal);
	const eventsCalendarState = useSelector((state: { calendarEvents: EventCalendarState }) => state.calendarEvents);
	const date = eventsCalendarState.selectedEventDateTime.eventDateTime;
	const [notification, setNotification] = useState<any>([]);

	const userId = 1;

	useEffect(() => {
		dispatch(eventCalendarActions.getAllEventsForCalendarPending(userId));
	}, []);

	const recordEvent = () => {
		if (date && notification[0].type === 'date_is_record') {
			const findEvent: EventDTO.IEventCalendar = eventSearch(eventsCalendarState.calendarEvents.entity.eventsPlans);
			dispatch(eventCalendarActions.recordOnEventPending(findEvent.id));
			dispatch(modalActions.showModal({
				key: ModalKey.Done,
				payload: {
					selectedEvent: findEvent
				}
			}));
		} else {
			const newNotification = [{ type: 'date_is_empty' }];
			setNotification(newNotification);
		}
	};

	const renderDayContents = (day: any) => {
		// onMouseEnter={() => onDateHover(day)}
		if (
			date &&
			eventsCalendarState.calendarEvents.entity.eventsRecord.some((item: any) => item.date === date.format('YYYY-MM-DD')) &&
			date.format('YYYY-MM-DD') === day.format('YYYY-MM-DD')
		) {
			return <div className="CalendarDay__red">{ day.format('D') }</div>;
		}
		const className =
			eventsCalendarState.calendarEvents.entity.eventsRecord.some((item: any) =>
				moment(item.date).format('YYYY-MM-DD') === day.format('YYYY-MM-DD'))
				? 'CalendarDay__orange'
				: eventsCalendarState.calendarEvents.entity.eventsPlans.some((item: any) =>
					moment(item.date).format('YYYY-MM-DD') ===
							day.format('YYYY-MM-DD'))
					? 'CalendarDay__purple'
					: '';
		// onMouseEnter={() => onDateHover(day)}
		if (className) {
			return <div className={ `${ className }` }>{ day.format('D') }</div>;
		}
		return day.format('D');
	};

	const eventSearch = (events: any) =>
		events.find((item: any) =>
			moment(item.date).format('YYYY-MM-DD') === date.format('YYYY-MM-DD'));

	useEffect(() => {
		if (date) {
			const newNotification = eventSearch(eventsCalendarState.calendarEvents.entity.eventsRecord)
				? [{ type: 'date_is_busy', index: 1 }]
				: eventSearch(eventsCalendarState.calendarEvents.entity.eventsPlans)
					? [{ type: 'date_is_record' }]
					: [{ type: 'date_is_empty' }];
			setNotification(newNotification);
		}
	}, [date]);

	const WarningInfo = () => {
		// console.log('WarningInfo') при нажатии вызывается два раза, разобраться!
		if (
			notification.length > 0 &&
			notification[0] !== undefined &&
			notification[0].type !== undefined
		) {
			if (notification[0].type && notification[0].type === 'date_is_record') {
				const findEvent = eventSearch(eventsCalendarState.calendarEvents.entity.eventsPlans);
				const dateFormat =
					findEvent != undefined
						? moment(findEvent.date).format('DD.MM.YYYY HH:mm')
						: '';
				return (
					<div className="info-notification">
						<span className="info-notification-title">Вы выбрали дату:</span>
						<Chips design="warning" size="s">
							{ dateFormat }
						</Chips>
					</div>
				);
			}
		}
		const textWarnings = [
			'Нужно выбрать дату посещения мероприятия',
			'У вас уже есть мероприятие в этот день. Выберите другой свободный день'
		];
		const textMessage =
			notification[0].type === 'date_is_busy'
				? textWarnings[notification[0].index]
				: textWarnings[0];
		return (
			<div className="info-notification">
				<IconImportant />
				<span className="info-notification-title--red">{ textMessage }</span>
			</div>
		);
	};

	return (
		<WithSkeleton
			isLoading={ eventsCalendarState.calendarEvents.isLoading }
			isEmpty={
				Object.keys(eventsCalendarState.calendarEvents.entity).length === 0
			}
		>
			<Modal.Header>
				<div className="modal-header-container">
					<H2 className="header-title">Выберите дату, чтобы записаться</H2>
				</div>
			</Modal.Header>
			<Modal.Body>
				<div className="modal-body-container">
					<div className="moda-body-title">{ modalState.payload.event.name }</div>
					<div style={ { height: '320px' } }>
						<DayPickerSingleDate
							date={ date }
							renderDayContents={ renderDayContents }
							widthResize={ 800 }
						/>
					</div>
					<div className="info-container">
						<div className="info-body">
							<div className="circle-information circle-information__purple" />
							<div> - Даты, в которые будет проходить мероприятие</div>
						</div>
						<div className="info-body">
							<div className="circle-information circle-information__orange" />
							<div className="info-title">
								{ ' ' }
								- Даты, в которые вы уже записаны на другие мероприятия
							</div>
						</div>
					</div>
					{ notification.length > 0 && <WarningInfo /> }
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div className="modal-footer-container">
					<Button
						onClick={ () => {
							dispatch(modalActions.hideModal());
						} }
					>
						Отмена
					</Button>
					<Button onClick={ recordEvent }>Записаться</Button>
				</div>
			</Modal.Footer>
		</WithSkeleton>
	);
};

export default EventRegistrationProcess;
