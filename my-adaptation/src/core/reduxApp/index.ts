import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
const sagaMiddleware = createSagaMiddleware();

export interface IState {
	cash: number;
	total: number;
}

const initialState: IState = {
	cash: 0,
	total: 0
};

const reducer = (state: IState = initialState, action: any): IState => {
	switch (action.type) {
		case 'ADD':
			return {
				...state,
				cash: state.cash + action.payload,
				total: state.cash + action.payload
			};
		default:
			return state;
	}
};

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);
