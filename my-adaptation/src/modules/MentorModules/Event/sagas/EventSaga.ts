import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { eventActions } from '../redux/EventSlices';
import { EventDTO } from '../dataContext/EventDTO.dto';
import { eventContext } from '../dataContext/mockApi/EventContext';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

function* EventSaga(action: any): SagaDataRequest<{ data: EventDTO.IEvent[] }> {
	try {
		const { data } = yield call(() =>
			eventContext.getEventById(action.payload));
		yield put(eventActions.getEventByIdSuccess(data));
	} catch (error) {
		yield put(eventActions.getEventByIdError(error));
	}
}

export default function* () {
	yield takeEvery(eventActions.getEventByIdPending, EventSaga);
}
