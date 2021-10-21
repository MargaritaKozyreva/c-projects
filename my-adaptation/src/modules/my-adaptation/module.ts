import { BaseModule } from '../allModules';
import routes from './routes';
import { educationReducers } from './redux/EducationSlices';
import { progressReducers } from './redux/progressSlices';

class _mainModule implements BaseModule {
	readonly name = 'main';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			progress: progressReducers,
			education: educationReducers
		};
	}

	getSagas() {
		return [];
	}

	getRoutes() {
		return routes;
	}
}

export const mainModule = new _mainModule();
