import { BaseModule } from '../allModules';
import { learnTableReducers } from './redux/learnTableSlices';
class _learnTableModule implements BaseModule {
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
		return [];
	}

	getRoutes() {
		return [];
	}
}

export const learnTableModule = new _learnTableModule();
