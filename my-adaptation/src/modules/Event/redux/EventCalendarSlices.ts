import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { EventDTO } from '../dataContext/EventDTO.dto';

export type EventCalendarState = {
	calendarEvents: {
		entity: {
			eventsPlans: Array<EventDTO.IEventCalendar>;
			eventsRecord: Array<EventDTO.IEventCalendar>;
		};
		isLoading: boolean;
		error: string | undefined;
	};
	selectedEvent: {
		event: EventDTO.IEvent;
		isLoading: boolean;
		error: string | undefined;
	};
	selectedEventDateTime: {
		eventDateTime: any;
	};
};

const initialState: EventCalendarState = {
	calendarEvents: {
		entity: {
			eventsPlans: [],
			eventsRecord: []
		},
		isLoading: false,
		error: undefined
	},
	selectedEvent: {
		event: {
			id: '',
			title: '',
			info: {
				place: '',
				type: '',
				dateStart: '',
				dateEnd: '',
				personCount: 0,
				state: '',
				mentor: '',
				mentorPosition: ''
			},
			attachFiles: {}
		},
		isLoading: false,
		error: undefined
	},
	selectedEventDateTime: {
		eventDateTime: undefined
	}
};

const eventCalendarSlice = createSlice({
	name: 'calendarEvents',
	initialState,
	reducers: {
		getAllEventsForCalendarPending: (state, action) => {
			state.calendarEvents.isLoading = true;
		},
		getAllEventsForCalendarSuccess: (state, action) => {
			state.calendarEvents.entity = action.payload;
			state.calendarEvents.isLoading = false;
		},
		getAllEventsForCalendarError: (state, action) => {
			state.calendarEvents.isLoading = false;
			state.calendarEvents.error = action.payload;
		},

		recordOnEventPending: (state, action) => {
			state.selectedEvent.isLoading = true;
		},
		recordOnEventSuccess: (state, action) => {
			state.selectedEvent.isLoading = false;
			state.selectedEvent.event = action.payload;
		},
		recordOnEventError: (state, action) => {
			state.selectedEvent.isLoading = false;
			state.selectedEvent.error = action.payload;
		},
		selectedTimeInCalendar: (state, action) => {
			state.selectedEventDateTime.eventDateTime = action.payload;
		},
		clearSelectedEvent: (state) => {
			state.selectedEvent.isLoading = false;
			(state.selectedEvent.event = {
				id: '',
				title: '',
				info: {
					place: '',
					type: '',
					dateStart: '',
					dateEnd: '',
					personCount: 0,
					state: '',
					mentor: '',
					mentorPosition: ''
				},
				attachFiles: {}
			}),
			(state.selectedEvent.error = undefined);
		},
		clearSelectedTime: (state) => {
			state.selectedEventDateTime.eventDateTime = undefined;
		}
	}
});

export const eventCalendarActions = eventCalendarSlice.actions;
export const eventCalendarReducers = eventCalendarSlice.reducer;
