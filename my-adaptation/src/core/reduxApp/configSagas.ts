import { all, ForkEffect } from 'redux-saga/effects';
import { allModules } from '../../modules/InternModules/allModules';

export const configSaga = () => {
	const sagas = allModules.reduce(
		(list: Generator<ForkEffect<never>, void>[], module) => {
			return list.concat(module.getSagas());
		},
		[]
	);

	return function* () {
		yield all(sagas);
	};
};
