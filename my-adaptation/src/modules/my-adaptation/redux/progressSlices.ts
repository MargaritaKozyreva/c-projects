import { MyAdaptationDTO } from '../dataContext/MyAdaptationDTO.dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProgressState = {
	loading: boolean;
	progressData: {
		progress: MyAdaptationDTO.Progress;
		steps: MyAdaptationDTO.Step[];
	};
};

const initialState: ProgressState = {
	loading: false,
	progressData: {
		progress: {
			percent: 0,
			endDate: ''
		},
		steps: []
	}
};

const progressSlices = createSlice({
	name: 'progressSlice',
	initialState,
	reducers: {
		getProgressRequest: (state) => {
			state.loading = true;
		},
		getProgressSuccess: (
			state,
			action: PayloadAction<ProgressState['progressData']>
		) => {
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
