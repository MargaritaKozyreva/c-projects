import { MyAdaptation } from '../dataContext/MyAdaptationDTO.dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type EducationState = {
	loading: boolean;
    educationData: {
        educationList: MyAdaptation.EducationList | null
    } | null
	
};

const initialState: EducationState = {
	loading: false,
	educationData: null
};

const educationSlices = createSlice({
	name: 'educationSlice',
	initialState,
	reducers: {
		geteducationRequest: (state) => {
			state.loading = true;
		},
		geteducationSuccess: (state, action: PayloadAction<EducationState['educationData']>) => {
			state.loading = false;
			state.educationData = action.payload;
		},
		geteducationError: (state, action) => {
			state.loading = false;
		}
	}
});

export const educationActions = educationSlices.actions;
export const educationReducers = educationSlices.reducer;