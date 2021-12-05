import { EventDTO } from '@modules/InternModules/Event/dataContext/EventDTO.dto';
import { eventCalendarActions } from '@modules/InternModules/Event/redux/EventCalendarSlices';
import { AxiosResponse } from 'axios';
import { put, StrictEffect, takeEvery } from 'redux-saga/effects';
import { modalActions } from '../redux/ModalSlices';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

export function* EventRecordClear(): SagaDataRequest<{
	data: EventDTO.IEvent;
}> {
	yield put(eventCalendarActions.clearSelectedEvent());
	yield put(eventCalendarActions.clearSelectedTime());
}
export default function* () {
	yield takeEvery(modalActions.hideModal, EventRecordClear);
}
