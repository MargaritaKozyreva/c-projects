import { httpService } from '@core/httpService/service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CourseDTO } from './CourseDTO.dto';

class CourseContext {
	getCourseById(id: number | string) {
		return createAsyncThunk('course/getCourseById', async(id: string) => {
			const courses = await httpService<CourseDTO.ICourse[]>(
				'GET',
				'getCourseById',
				id
			);
			return courses;
		});
	}
}

export const courseContext = new CourseContext();