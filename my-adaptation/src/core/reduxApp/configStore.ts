import { combineReducers } from 'redux';
import { AnyAction, CaseReducer, configureStore } from '@reduxjs/toolkit';
import { History } from 'history';

type ConfigStore = {
	initState: {
		[k in string]: any;
	};
	reducers: {[k in string]: CaseReducer};
	middlewares: any;
	history?: History
}


const configStore = ({ initState, reducers, middlewares }: ConfigStore) => {
	const appReducers = combineReducers({
		...reducers
	});

	// https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store/35641992#35641992
	// добавляем возможность очистики стора
	const allReducers = (state: {[k in string]: any} | undefined, action: AnyAction) => {
		let nextState = state;
		if (action.type === '@@core/CLEAR_APP') {
			nextState = undefined;
		}
		return appReducers(nextState, action);
	};

	return configureStore({
		reducer: allReducers,
		devTools: true,
		preloadedState: initState,
		middleware: [...middlewares]
	});
};

export { configStore };