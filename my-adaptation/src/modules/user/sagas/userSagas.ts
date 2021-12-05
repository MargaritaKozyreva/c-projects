import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { UserDTO } from '../dataContext/UserDTO.dto';
import { userActions } from '../redux/userSlices';
import { userContext } from '../dataContext/mockApi/UserContext';

export type SagaDataRequest<D> = Generator<
	StrictEffect,
	void,
	AxiosResponse<D>
>;

const getUserSaga = function* (): SagaDataRequest<UserDTO.User> {
	try {
		const { data } = yield call(userContext.getUserProgress);
		yield put(userActions.getUserSuccess(data));
	} catch (e) {
		yield put(userActions.getUserError(e));
	}
};

export const userSaga = function* () {
	yield takeEvery(userActions.getUser, getUserSaga);
};
