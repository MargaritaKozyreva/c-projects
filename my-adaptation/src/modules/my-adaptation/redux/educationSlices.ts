import { MyAdaptationDTO } from '../dataContext/MyAdaptationDTO.dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type EducationState = {
	loading: boolean;
    educationData: {
        educationList: MyAdaptationDTO.EducationList | null
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
		getEducationRequest: (state) => {
			state.loading = true;
		},
		getEducationSuccess: (state, action: PayloadAction<EducationState['educationData']>) => {
			state.loading = false;
			state.educationData = action.payload;
		},
		getEducationError: (state, action) => {
			state.loading = false;
		}
	}
});

export const educationActions = educationSlices.actions;
export const educationReducers = educationSlices.reducer;