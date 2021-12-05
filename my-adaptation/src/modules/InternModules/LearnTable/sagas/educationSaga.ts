import { throttle, put, call, StrictEffect } from 'redux-saga/effects';
import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { learnTableContext } from '../dataContext/mockApi/LearnTableContext';

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
		const { data } = yield call(() =>
			learnTableContext.getEducationListByStepNumber(action.payload));
		yield put(learnTableActions.getEducationSuccess(data));
		yield put(learnTableActions.pushEducationListInHistory({
			stepNum: action.payload,
			data
		}));
	} catch (error) {
		yield put(learnTableActions.getEducationError(error));
	}
}

export default function* () {
	yield throttle(
		2000,
		learnTableActions.getEducationListByStepNumber,
		LearnTableSaga
	);
}
