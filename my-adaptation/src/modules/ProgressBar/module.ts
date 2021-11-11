import { BaseModule } from '../allModules';
import { progressReducers } from './redux/progressSlices';
import { stepsReducers } from './redux/stepsSlices';
import { progressSaga } from './sagas/progressSaga';
import { stepsSaga } from './sagas/stepsSaga';

class _progressModule implements BaseModule {
	readonly name = 'progress';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			progressData: progressReducers,
			stepsData: stepsReducers
		};
	}

	getSagas() {
		return [progressSaga(), stepsSaga()];
	}

	getRoutes() {
		return [];
	}
}

export const progressModule = new _progressModule();
