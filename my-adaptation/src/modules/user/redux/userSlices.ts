import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { UserDTO } from '../dataContext/UserDTO.dto';

export type UserState = {
	user: {
		entitiy: UserDTO.User | null;
		isLoading: boolean;
		error: string | undefined;
	};
};

const initialState: UserState = {
	user: {
		entitiy: null,
		isLoading: false,
		error: undefined
	}
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUser: (state) => {
			state.user.isLoading = true;
		},
		getUserSuccess: (state, action) => {
			state.user.isLoading = false;
			state.user.entitiy = action.payload;
		},
		getUserError: (state, action) => {
			state.user.isLoading = false;
		}
	}
});

export const userActions = userSlice.actions;
export const userReducers = userSlice.reducer;
