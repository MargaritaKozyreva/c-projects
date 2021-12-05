import { BaseModule } from '../allModules';
import { courseReducer } from './redux/CourseSlices';
import { courseSaga } from './sagas/CourseSaga';

class CourseModule implements BaseModule {
	readonly name = 'course';

	getMiddlewares() {
		return [];
	}

	getReducers() {
		return {
			courses: courseReducer
		};
	}

	getSagas() {
		return [courseSaga()];
	}

	getRoutes() {
		return [];
	}
}

export const courseModule = new CourseModule();
