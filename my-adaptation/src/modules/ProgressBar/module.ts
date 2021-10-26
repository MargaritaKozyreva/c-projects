import { BaseModule } from '../allModules';
import { progressReducers } from './redux/progressSlices';
class _progressModule implements BaseModule {
	readonly name = 'progress';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			progress: progressReducers
		};
	}

	getSagas() {
		return [];
	}

	getRoutes() {
		return [];
	}
}

export const progressModule = new _progressModule();
