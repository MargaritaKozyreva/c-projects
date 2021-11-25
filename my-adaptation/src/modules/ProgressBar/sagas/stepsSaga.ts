import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { ProgressDTO } from '../dataContext/ProgressDTO.dto';
import { progressContext } from '../dataContext/mockApi/ProgressContext';
import { stepsActions } from '../redux/stepsSlices';
import { AxiosResponse } from 'axios';
import { progressActions } from '../redux/progressSlices';
import { learnTableActions } from '@modules/LearnTable/redux/learnTableSlices';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

const getStepsSaga = function* (): SagaDataRequest<ProgressDTO.Step[]> {
	try {
		const { data } = yield call(progressContext.getSteps);
		yield put(stepsActions.getStepsSuccess(data));
	} catch (e) {
		yield put(stepsActions.getStepsError(e));
	}
};

const changeCurrentStep = function* (action: any): SagaDataRequest<ProgressDTO.Progress> {
	yield put(stepsActions.changeSteps(action.payload));
};

export const stepsSaga = function* () {
	yield takeEvery(stepsActions.getStepsRequest, getStepsSaga);
	yield takeEvery(
		learnTableActions.getEducationListByStepNumber,
		changeCurrentStep
	);
};
