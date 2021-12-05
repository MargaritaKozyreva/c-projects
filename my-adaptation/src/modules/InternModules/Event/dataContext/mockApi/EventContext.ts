import { EventDTO } from '../EventDTO.dto';
import {
	httpServiceMock,
	ResponseResult
} from '../../../../../core/httpService/service';

class EventContext {
	getEventById(id: string): ResponseResult<Array<EventDTO.IEvent>> {
		return httpServiceMock<Array<EventDTO.IEvent>>([
			{
				id: id,
				title: 'Тренинг #PROклиента',
				info: {
					place: 'МСК',
					type: 'event',
					dateStart: '21.11.2021 10:00',
					dateEnd: '21.11.2021 13:00',
					personCount: 30,
					state: 'Запланированно',
					mentor: 'Козырева Маргарита Анатольевна',
					mentorPosition: 'Региональный HR BP'
				},
				attachFiles: []
			}
		]);
	}

	getAllEventsForCalendar(userId: string): ResponseResult<{
		eventsPlans: Array<EventDTO.IEventCalendar>;
		eventsRecord: Array<EventDTO.IEventCalendar>;
	}> {
		return httpServiceMock<{
			eventsPlans: Array<EventDTO.IEventCalendar>;
			eventsRecord: Array<EventDTO.IEventCalendar>;
		}>({
			eventsPlans: [
				{
					id: 111111111,
					name: 'Тренинг #PROклиента',
					date: '2021-12-02 17:00',
					address: 'Просп.Андропова, 8'
				},
				{
					id: 111111111,
					name: 'Тренинг #PROклиента',
					date: '2021-11-07 15:00',
					address: 'Просп.Андропова, 8'
				},
				{
					id: 111111111,
					name: 'Тренинг #PROклиента',
					date: '2021-11-21 10:00',
					address: 'Просп.Андропова, 8'
				},
				{
					id: 111111111,
					name: 'Тренинг #PROклиента',
					date: '2021-12-07 15:30',
					address: 'Просп.Андропова, 8'
				}
			],
			eventsRecord: [
				{
					id: 111111111,
					name: 'Тренинг #PROклиента',
					date: '2021-11-13',
					address: 'Просп.Андропова, 8'
				},
				{
					id: 111111111,
					name: 'Тренинг #PROклиента',
					date: '2021-12-17',
					address: 'Просп.Андропова, 8'
				},
				{
					id: 111111111,
					name: 'Тренинг #PROклиента',
					date: '2021-11-20',
					address: 'Просп.Андропова, 8'
				},
				{
					id: 111111111,
					name: 'Тренинг #PROклиента',
					date: '2021-12-11',
					address: 'Просп.Андропова, 8'
				}
			]
		});
	}

	recordOnEvent(eventId: string): ResponseResult<EventDTO.IEvent> {
		return httpServiceMock<EventDTO.IEvent>({
			id: eventId,
			title: 'Тренинг #PROклиента',
			info: {
				place: 'МСК',
				type: 'event',
				dateStart: '21.11.2021 10:00',
				dateEnd: '21.11.2021 13:00',
				personCount: 30,
				state: 'Запланированно',
				mentor: 'Козырева Маргарита Анатольевна',
				mentorPosition: 'Региональный HR BP'
			},
			attachFiles: []
		});
	}
}

export const eventContext = new EventContext();
