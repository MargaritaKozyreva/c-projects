import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { ProgressDTO } from '../dataContext/ProgressDTO.dto';
import { ProgressContext } from '../dataContext/ProgressContext';
import { stepsActions } from '../redux/stepsSlices';
import { AxiosResponse } from 'axios';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

const getStepsSaga = function* (): SagaDataRequest<ProgressDTO.Step[]> {
	try {
		const { data } = yield call(ProgressContext.getSteps);
		yield put(stepsActions.getStepsSuccess(data));
	} catch (e) {
		yield put(stepsActions.getStepsError(e));
	}
};

export const stepsSaga = function* () {
	yield takeEvery(stepsActions.getStepsRequest, getStepsSaga);
};
