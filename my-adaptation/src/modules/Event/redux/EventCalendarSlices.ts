import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { eventContext } from '../dataContext/EventContext';
import { EventDTO } from '../dataContext/EventDTO.dto';

export type EventCalendarState = {
	entity: {
		eventsPlans: Array<EventDTO.IEventCalendar>;
		eventsRecord: Array<EventDTO.IEventCalendar>;
	};
	isLoading: boolean;
	error: string | undefined;
};

const initialState: EventCalendarState = {
	entity: {
		eventsPlans: [],
		eventsRecord: []
	},
	isLoading: false,
	error: undefined
};

const eventCalendarSlice = createSlice({
	name: 'calendarEvents',
	initialState,
	reducers: {
		getAllEventsForCalendarPending: (state, action) => {
			state.isLoading = true;
		},
		getAllEventsForCalendarSuccess: (state, action) => {
			state.entity = action.payload;
			state.isLoading = false;
		},
		getAllEventsForCalendarError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const eventCalendarActions = eventCalendarSlice.actions;
export const eventCalendarReducers = eventCalendarSlice.reducer;
