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

const LearnTableSaga =
	function* (): SagaDataRequest<LearnTableDTO.LearnListData[]> {
		try {
			const { data } = yield call(LearnTableContext.getEducationList); // вызываем функцию getEducationList
			yield put(learnTableActions.getEducationSuccess(data)); // put - аналог диспатча. Отправляем данные в стор
		} catch (e) {
			yield put(learnTableActions.getEducationError(e));
		}
	};

export default function* () {
	yield takeEvery(learnTableActions.getEducationRequest, LearnTableSaga);
}
