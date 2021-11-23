import { ProgressDTO } from '../dataContext/ProgressDTO.dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type StepsState = {
	loading: boolean;
	data: Array<{ data: ProgressDTO.Step[] }>;
};

export interface IStepsInitialState {
	steps: StepsState;
}

const initialState: IStepsInitialState = {
	steps: {
		loading: true,
		data: [
			{
				data: []
			}
		]
	}
};

const stepsSlices = createSlice({
	name: 'stepsSlice',
	initialState,
	reducers: {
		getStepsRequest: (state) => {
			state.steps.loading = true;
		},
		getStepsSuccess: (state, action: PayloadAction<any>) => {
			state.steps.loading = false;
			state.steps.data = action.payload;
		},
		getStepsError: (state, action) => {
			state.steps.loading = false;
		},
		changeSteps: (state, action) => {
			const oldCurrentStep: ProgressDTO.Step | undefined =
				state.steps.data[0]?.data.filter((step) => step.stepState === 'selected')[0];
			const currentStep: ProgressDTO.Step | undefined =
				state.steps.data[0]?.data.filter((step) => step.num === action.payload)[0];
			if (currentStep && oldCurrentStep) {
				oldCurrentStep.stepState = 'active';
				currentStep.stepState = 'selected';
			}
		}
	}
});

export const stepsActions = stepsSlices.actions;
export const stepsReducers = stepsSlices.reducer;
