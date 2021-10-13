import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { userContext } from '../dataContext/MyAdaptationContext';
import { userActions } from '../redux/userSlices';

export default function* () {
	yield takeEvery(userActions.getUsersRequest, getTestUsersSaga);
}

const getTestUsersSaga = function* (): Generator<StrictEffect, void, string> {
	try {
		const users = yield call(userContext.login);
		yield put(userActions.getUsersSuccess(users));
	} catch (e) {
		yield put(userActions.getUsersError());
	}
};