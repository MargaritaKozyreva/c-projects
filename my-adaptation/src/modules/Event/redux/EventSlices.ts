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
	// extraReducers: (builder) => {
	// 	builder.addCase(eventContext.getEventById.pending, (state) => {
	// 		state.events.isLoading = true;
	// 	});
	// 	builder.addCase(
	// 		eventContext.getEventById.,
	// 		(state, action: PayloadAction<AxiosResponse>) => {
	// 			state.events.isLoading = false;
	// 			state.events.entities = action.payload.data;
	// 		}
	// 	);
	// 	builder.addCase(
	// 		eventContext.getEventById.rejected,
	// 		(state, action: PayloadAction<any>) => {
	// 			state.events.isLoading = false;
	// 			state.events.error = action.payload.error.message;
	// 		}
	// 	);
	// }
});

export const eventActions = eventSlice.actions;
export const eventReducers = eventSlice.reducer;
