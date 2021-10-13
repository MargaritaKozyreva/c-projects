import { MyAdaptation } from '../dataContext/MyAdaptationDTO.dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProgressState = {
	loading: boolean;
	progressData: {
		progress: MyAdaptation.Progress | null
		steps: Array<MyAdaptation.Steps> | null
	} | null
};

const initialState: ProgressState = {
	loading: false,
	progressData: null,
};

const progressSlices = createSlice({
	name: 'progressSlice',
	initialState,
	reducers: {
		getProgressRequest: (state) => {
			state.loading = true;
		},
		getProgressSuccess: (state, action: PayloadAction<ProgressState['progressData']>) => {
			state.loading = false;
			state.progressData = action.payload;
		},
		getProgressError: (state, action) => {
			state.loading = false;
		}
	}
});

export const progressActions = progressSlices.actions;
export const progressReducers = progressSlices.reducer;