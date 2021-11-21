import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type learnTableState = {
	loading: boolean;
	learnListData: LearnTableDTO.LearnListData[];
	historyListData: any;
};

const initialState: learnTableState = {
	loading: false,
	learnListData: [
		{
			data: {
				position: '',
				step_num: 0,
				blocks: [],
				headerList: []
			}
		}
	],
	historyListData: {}
};

const learnTableSlices = createSlice({
	name: 'educationSlice',
	initialState,
	reducers: {
		getEducationListByStepNumber: (state, action) => {
			state.loading = true;
		},
		getEducationSuccess: (
			state,
			action: PayloadAction<learnTableState['learnListData']>
		) => {
			state.loading = false;
			state.learnListData = action.payload;
		},
		pushEducationListInHistory: (
			state,
			action: PayloadAction<{
				stepNum: string;
				data: learnTableState['learnListData'];
			}>
		) => {
			if (
				typeof state.historyListData[action.payload.stepNum] === 'undefined'
			) {
				state.historyListData = {
					...state.historyListData,
					[action.payload.stepNum]: action.payload.data
				};
			}
		},
		getEducationError: (state, action) => {
			state.loading = false;
		}
	}
});

export const learnTableActions = learnTableSlices.actions;
export const learnTableReducers = learnTableSlices.reducer;
