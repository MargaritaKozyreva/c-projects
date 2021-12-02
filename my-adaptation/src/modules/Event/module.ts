import { BaseModule } from '../allModules';
import { eventCalendarReducers } from './redux/EventCalendarSlices';
import { eventReducers } from './redux/EventSlices';
import EventCalendarSaga from './sagas/EventCalendarSaga';
import EventSaga from './sagas/EventSaga';

class EventModule implements BaseModule {
	readonly name = 'event';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			events: eventReducers,
			calendarEvents: eventCalendarReducers,
		};
	}

	getSagas() {
		return [EventSaga(), EventCalendarSaga()];
	}

	getRoutes() {
		return [];
	}
}

export const eventModule = new EventModule();
