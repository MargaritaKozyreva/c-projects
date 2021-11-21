import { BaseModule } from '../allModules';
import { eventReducers } from './redux/EventSlices';
import EventSaga from './sagas/EventSaga';

class EventModule implements BaseModule {
	readonly name = 'event';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			events: eventReducers
		};
	}

	getSagas() {
		return [EventSaga()];
	}

	getRoutes() {
		return [];
	}
}

export const eventModule = new EventModule();
