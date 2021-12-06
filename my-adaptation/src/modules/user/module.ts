import { BaseModule } from '@modules/allModules';
import { userReducers } from './redux/userSlices';
import { userSaga } from './sagas/userSagas';

class UserModule implements BaseModule {
	readonly name = 'user';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			user: userReducers
		};
	}

	getSagas() {
		return [userSaga()];
	}

	getRoutes() {
		return [];
	}
}

export const userModule = new UserModule();
