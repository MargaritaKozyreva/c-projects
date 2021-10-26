import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type learnTableState = {
	loading: boolean;
    learnTableData: {
        learnList: LearnTableDTO.LearnList | null
    } | null
};

const initialState: learnTableState = {
	loading: false,
	learnTableData: null
};

const learnTableSlices = createSlice({
	name: 'educationSlice',
	initialState,
	reducers: {
		getEducationRequest: (state) => {
			state.loading = true;
		},
		getEducationSuccess: (state, action: PayloadAction<learnTableState['learnTableData']>) => {
			state.loading = false;
			state.learnTableData = action.payload;
		},
		getEducationError: (state, action) => {
			state.loading = false;
		}
	}
});

export const learnTableActions = learnTableSlices.actions;
export const learnTableReducers = learnTableSlices.reducer;