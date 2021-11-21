import { httpService } from '@core/httpService/service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { EventDTO } from './EventDTO.dto';

class EventContext {
	getEventById() {
		return createAsyncThunk('event/getEventById', async(id: string) => {
			const event = await httpService<EventDTO.IEvent[]>(
				'GET',
				'getEventById',
				id
			);
			return event;
		});
	}
}

export const eventContext = new EventContext();