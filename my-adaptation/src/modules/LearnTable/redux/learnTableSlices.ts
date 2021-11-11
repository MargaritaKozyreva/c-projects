import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getEducationsById } from '@core/features/educationList/thunks/getEducationsById';

export type learnTableState = {
	loading: boolean;
	learnListData: LearnTableDTO.LearnListData[];
};

const initialState: learnTableState = {
	loading: false,
	learnListData: [
		{
			data: {
				position: '',
				step_num: 0,
				rawList: [],
				headerList: []
			}
		}
	]
};

const learnTableSlices = createSlice({
	name: 'educationSlice',
	initialState,
	reducers: {
		getEducationRequest: (state, action) => {
			state.loading = true;
		},
		getEducationSuccess: (
			state,
			action: PayloadAction<learnTableState['learnListData']>
		) => {
			state.loading = false;
			state.learnListData = action.payload;
		},
		getEducationError: (state, action) => {
			state.loading = false;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getEducationsById.fulfilled, (state, action) => {
			console.log(action.payload);
		});
	}
});

export const learnTableActions = learnTableSlices.actions;
export const learnTableReducers = learnTableSlices.reducer;
