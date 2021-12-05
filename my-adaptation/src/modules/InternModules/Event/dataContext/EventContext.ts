import { httpService } from '@core/httpService/service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { EventDTO } from './EventDTO.dto';

class EventContext {
	getEventById(id: string) {
		return createAsyncThunk('event/getEventById', async() => {
			const event = await httpService<EventDTO.IEvent[]>(
				'GET',
				'getEventById',
				id
			);
			return event;
		});
	}
	getAllEventsForCalendar(id: string) {
		return createAsyncThunk(
			'event/getAllEventsForCalendar',
			async() => {
				const event = await httpService<{
					eventsPlans: Array<EventDTO.IEventCalendar>;
					eventsRecord: Array<EventDTO.IEventCalendar>;
				}>('GET', 'getAllEventsForCalendar', id);
				return event;
			}
		);
	}

	recordOnEvent(eventId: string) {
		return createAsyncThunk(
			'calendarEvents/recordOnEvent',
			async() => {
				const event = await httpService<EventDTO.IEvent>(
					'GET',
					'recordOnEvent',
					eventId
				);
				return event;
			}
		);
	}
}

export const eventContext = new EventContext();
