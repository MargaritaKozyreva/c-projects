import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { LearnTableContext } from '../dataContext/LearnTableContext';
import { learnTableActions, learnTableReducers } from '../redux/learnTableSlices';
import { AxiosResponse } from 'axios';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

const LearnTableSaga = function* (): SagaDataRequest<LearnTableDTO.LearnListData> {
	try {
		const { data } = yield call(LearnTableContext.getEducationList);
		yield put(learnTableActions.getEducationSuccess(data));
	} catch (e) {
		yield put(learnTableActions.getEducationError(e));
	}
};
