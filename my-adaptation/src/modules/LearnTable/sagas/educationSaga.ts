import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
// import { LearnTableContext } from '../dataContext/mockApi/LearnTableContext';
import { LearnTableContext } from '../dataContext/LearnTableContext';

import {
	learnTableActions,
	learnTableReducers
} from '../redux/learnTableSlices';
import { AxiosResponse } from 'axios';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

function* LearnTableSaga(action: any): SagaDataRequest<LearnTableDTO.LearnListData[]> {
	try {
		const { data } = yield call(LearnTableContext.getEducationListByStepId(action.payload));
		yield put(learnTableActions.getEducationSuccess(data))
	} catch (error) {
		yield put(learnTableActions.getEducationError(error))
	}
}

export default function* () {
	yield takeEvery(learnTableActions.getEducationListById, LearnTableSaga);
}
