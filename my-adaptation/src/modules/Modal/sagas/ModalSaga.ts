import { throttle, put, call, takeEvery } from 'redux-saga/effects';
import { modalActions } from '../redux/ModalSlices';

function* ShowModalSaga(action: any) {
	yield put(modalActions.showModal(action));
}
function* HideModalSaga(action: any) {
	yield put(modalActions.hideModal());
}

export default function* () {
	yield takeEvery(modalActions.showModal, ShowModalSaga);
	yield takeEvery(modalActions.hideModal, HideModalSaga);
}
