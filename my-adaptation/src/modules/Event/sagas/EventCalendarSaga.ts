import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { eventCalendarActions } from '../redux/EventCalendarSlices';
import { EventDTO } from '../dataContext/EventDTO.dto';
import { eventContext } from '../dataContext/mockApi/EventContext';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

function* EventCalendarSaga(action: any): SagaDataRequest<{
	data: {
		eventsPlans: Array<EventDTO.IEventCalendar>;
		eventsRecord: Array<EventDTO.IEventCalendar>;
	};
}> {
	try {
		const { data } = yield call(() =>
			eventContext.getAllEventsForCalendar(action.payload));
		yield put(eventCalendarActions.getAllEventsForCalendarSuccess(data));
	} catch (error) {
		yield put(eventCalendarActions.getAllEventsForCalendarError(action.payload));
	}
}

export default function* () {
	yield takeEvery(
		eventCalendarActions.getAllEventsForCalendarPending,
		EventCalendarSaga
	);
}
