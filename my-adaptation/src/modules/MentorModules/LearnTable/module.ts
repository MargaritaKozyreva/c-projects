import { BaseModule } from '../allModules';
import { learnTableReducers } from './redux/learnTableSlices';
import LearnTableSaga from './sagas/educationSaga';
import routes from './routes';
class LearnTableModule implements BaseModule {
	readonly name = 'learnTable';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			learnTable: learnTableReducers
		};
	}

	getSagas() {
		return [LearnTableSaga()];
	}

	getRoutes() {
		return routes;
	}
}

export const learnTableModule = new LearnTableModule();
