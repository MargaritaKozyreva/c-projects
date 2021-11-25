import { createSlice } from '@reduxjs/toolkit';
import { ReactElement } from 'react';

export type ModalState = {
	isShow: boolean;
	content: any;
	props?: any;
};

const initialState: ModalState = {
	isShow: false,
	content: null,
	props: {}
};

const modalSlices = createSlice({
	name: 'modalSlice',
	initialState,
	reducers: {
		showModal: (
			state,
			action: {
				payload: { content: ModalState['content']; props: ModalState['props'] };
			}
		) => {
			state.isShow = true;
			state.content = action.payload.content;
			state.props = action.payload.props;
		},
		hideModal: (state) => {
			state.isShow = false;
			state.content = null;
			state.props = {};
		}
	}
});

export const modalActions = modalSlices.actions;
export const modalReducers = modalSlices.reducer;
