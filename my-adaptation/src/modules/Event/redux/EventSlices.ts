import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { eventContext } from '../dataContext/EventContext';
import { EventDTO } from '../dataContext/EventDTO.dto';

export type EventState = {
	events: {
		entities: EventDTO.IEvent[];
		isLoading: boolean;
		error: string | undefined;
	};
};

const initialState: EventState = {
	events: {
		entities: [],
		isLoading: false,
		error: undefined
	}
};

const eventSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		getEventByIdPending: (state, action) => {
			state.events.isLoading = true;
		},
		getEventByIdSuccess: (state, action) => {
			state.events.isLoading = false;
			state.events.entities = action.payload;
		},
		getEventByIdError: (state, action) => {
			state.events.isLoading = false;
		}
	}
});

export const eventActions = eventSlice.actions;
export const eventReducers = eventSlice.reducer;
