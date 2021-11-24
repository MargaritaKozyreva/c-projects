//1. Описываем интерфейс стейта
//2. Пишем дефолтный стейт
//3. Пишем редьюсер

import { createSlice } from '@reduxjs/toolkit';
import { CourseDTO } from '../dataContext/CourseDTO.dto';

export type CourseState = {
	courses: {
		entities: CourseDTO.ICourse[];
		isLoading: boolean;
		error: string | undefined;
	};
};

const initialState: CourseState = {
	courses: {
		entities: [],
		isLoading: false,
		error: undefined
	}
};

const courseSlice = createSlice({
	name: 'courses',
	initialState: initialState,
	reducers: {
		getCourseByIdPending: (state, action) => {
			state.courses.isLoading = true;
		},
		getCourseByIdSuccess: (state, action) => {
			state.courses.entities = action.payload;
			state.courses.isLoading = true;
		},
		getCourseByIdError: (state, action) => {
			state.courses.isLoading = false;
			state.courses.error = action.payload.error;
		}
	}
});

export const courseActions = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
