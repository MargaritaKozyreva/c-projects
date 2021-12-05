import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { ProgressDTO } from '../dataContext/ProgressDTO.dto';
import { progressContext } from '../dataContext/mockApi/ProgressContext';
import { progressActions } from '../redux/progressSlices';
import { AxiosResponse } from 'axios';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

const getUserProgressSaga =
	function* (): SagaDataRequest<ProgressDTO.Progress> {
		try {
			const { data } = yield call(progressContext.getUserProgress);
			yield put(progressActions.getProgressSuccess(data));
		} catch (e) {
			yield put(progressActions.getProgressError(e));
		}
	};

export const progressSaga = function* () {
	yield takeEvery(progressActions.getProgressFetch, getUserProgressSaga);
};
