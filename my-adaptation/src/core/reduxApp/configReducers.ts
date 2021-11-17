import { allModules, ReducerType } from '@modules/allModules';

export const configReducers = () => {
	const reducers: ReducerType = {};

	allModules.map((module) => Object.assign(reducers, module.getReducers()));

	return reducers;
};
