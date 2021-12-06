import { ProgressDTO } from '../dataContext/ProgressDTO.dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProgressState = {
	loading: boolean;
	data: ProgressDTO.Progress;
};

export interface IProgressInitialState {
	progress: ProgressState;
}

export const initialState: IProgressInitialState = {
	progress: {
		loading: true,
		data: {
			percent: 0,
			endDate: ''
		}
	}
};

const progressSlices = createSlice({
	name: 'progressSlice',
	initialState,
	reducers: {
		getProgressFetch: (state) => {
			state.progress.loading = true;
		},
		getProgressSuccess: (
			state,
			action: PayloadAction<ProgressDTO.Progress>
		) => {
			state.progress.loading = false;
			state.progress.data = action.payload;
		},
		getProgressError: (state, action) => {
			state.progress.loading = false;
		}
	}
});

export const progressActions = progressSlices.actions;
export const progressReducers = progressSlices.reducer;
