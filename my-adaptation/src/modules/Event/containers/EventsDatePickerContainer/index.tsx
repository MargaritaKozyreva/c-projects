import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import ModalDefaultContent from './ModalDefaultContent';
import ModalNotificationContent from './ModalNotificationContent';
import Button from '@ui/components/Button';
import { IconImportant } from '@icons/IconImportant';
import { recordOnEvent } from './service/index';
import { useDispatch, useSelector } from 'react-redux';
import {
	eventCalendarActions,
	EventCalendarState
} from '@modules/Event/redux/EventCalendarSlices';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import './styled.css';
import { Chips } from '@ui/components/Chips';

const EventsDatePickerContainer = () => {
	const dispatch = useDispatch();
	const eventsCalendarState = useSelector((state: { calendarEvents: EventCalendarState }) => state.calendarEvents);
	const userId = 1;

	useEffect(() => {
		dispatch(eventCalendarActions.getAllEventsForCalendarPending(userId));
	}, []);

	const [date, setDate] = useState<any>(null);
	const [notification, setNotification] = useState<any>([]);
	const [notificationRecordEvent, setNotificationRecordEvent] =
		useState<any>(false);
	const [eventRecordInfo, setEventRecordInfo] = useState<any>({});

	const WarningInfo = () => {
		// console.log('WarningInfo') при нажатии вызывается два раза, разобраться!
		if (
			notification.length > 0 &&
			notification[0] !== undefined &&
			notification[0].type !== undefined
		) {
			if (notification[0].type && notification[0].type === 'date_is_record') {
				const findEvent = eventSearch(eventsCalendarState.entity.eventsPlans);
				const dateFormat =
					findEvent != undefined
						? moment(findEvent.date).format('DD.MM.YYYY HH:mm')
						: '';
				return (
					<div className="info-notification">
						<span className="info-notification-title">Вы выбрали дату:</span>
						<Chips design='warning' size='s'>
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

	const eventSearch = (events: any) =>
		events.find((item: any) =>
			moment(item.date).format('YYYY-MM-DD') === date.format('YYYY-MM-DD'));

	const closeModal = () => {
		setDate(null);
		setNotification([]);
	};

	const closeModalNotification = () => {
		setNotificationRecordEvent(false);
		setEventRecordInfo({});
	};

	useEffect(() => {
		if (date) {
			const newNotification = eventSearch(eventsCalendarState.entity.eventsRecord)
				? [{ type: 'date_is_busy', index: 1 }]
				: eventSearch(eventsCalendarState.entity.eventsPlans)
					? [{ type: 'date_is_record' }]
					: [{ type: 'date_is_empty' }];
			setNotification(newNotification);
		}
	}, [date]);

	const recordEvent = () => {
		if (date && notification[0].type === 'date_is_record') {
			const findEvent = eventSearch(eventsCalendarState.entity.eventsPlans);
			setEventRecordInfo(findEvent);
			closeModal();
			recordOnEvent().then((data) => {
				setNotificationRecordEvent(true);
			});
		} else {
			const newNotification = [{ type: 'date_is_empty' }];
			setNotification(newNotification);
		}
	};

	//Рендерим ячейки
	const renderDayContents = (day: any) => {
		// onMouseEnter={() => onDateHover(day)}
		if (
			date &&
			eventsCalendarState.entity.eventsRecord.some((item: any) => item.date === date.format('YYYY-MM-DD')) &&
			date.format('YYYY-MM-DD') === day.format('YYYY-MM-DD')
		) {
			return <div className="CalendarDay__red">{ day.format('D') }</div>;
		}
		const className = eventsCalendarState.entity.eventsRecord.some((item: any) =>
			moment(item.date).format('YYYY-MM-DD') === day.format('YYYY-MM-DD'))
			? 'CalendarDay__orange'
			: eventsCalendarState.entity.eventsPlans.some((item: any) =>
				moment(item.date).format('YYYY-MM-DD') === day.format('YYYY-MM-DD'))
				? 'CalendarDay__purple'
				: '';
		// onMouseEnter={() => onDateHover(day)}
		if (className) {
			return <div className={ `${ className }` }>{ day.format('D') }</div>;
		}
		return day.format('D');
	};

	return (
		<WithSkeleton
			isLoading={ eventsCalendarState.isLoading }
			isEmpty={ Object.keys(eventsCalendarState.entity).length === 0 }
		>
			<div>
				{ (notificationRecordEvent && (
					<ModalNotificationContent
						eventInfo={ eventRecordInfo }
					/>
				)) || (
					<ModalDefaultContent
						notification={ notification }
						events={ eventsCalendarState.entity }
						date={ date }
						setDate={ setDate }
						closeModal={ closeModal }
						renderDayContents={ renderDayContents }
						nameEvent={ 111 }
						recordEvent={ recordEvent }
						WarningInfo={ WarningInfo }
					/>
				) }
			</div>
		</WithSkeleton>
	);
};

export default EventsDatePickerContainer;
