import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { MyAdaptationDTO } from '../dataContext/MyAdaptationDTO.dto';
import { MyAdaptationContext } from '../dataContext/MyAdaptationContext';
import { progressActions } from '../redux/progressSlices';
import { AxiosResponse } from 'axios';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

const getUserProgress =
	function* (): SagaDataRequest<any> {
		try {
			const { data } = yield call(MyAdaptationContext.getUserProgress);
			yield put(progressActions.getProgressSuccess(data));
		} catch (e) {
			yield put(progressActions.getProgressError(e));
		}
	};
