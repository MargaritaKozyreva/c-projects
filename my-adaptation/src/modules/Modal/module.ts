import { BaseModule } from '../allModules';
import { modalReducers } from './redux/ModalSlices';
class ModalModule implements BaseModule {
	readonly name = 'modal';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			modal: modalReducers
		};
	}

	getSagas() {
		return [];
	}

	getRoutes() {
		return [];
	}
}

export const modalModule = new ModalModule();
