import { createSlice } from '@reduxjs/toolkit';

export enum ModalKey {
	Default = 'DEFAULT',
	Process = 'PROCESS',
	Done = 'DONE'
}

export type ModalKeyToPayload = {
	[ModalKey.Default]: null;
	[ModalKey.Process]: { readonly eventId: number | string };
	[ModalKey.Done]: { readonly eventName: string };
};

export type ModalState = {
	isShow: boolean;
	key: ModalKey;
	payload?: any;
};

const initialState: ModalState = {
	isShow: false,
	key: ModalKey.Default,
	payload: {}
};


const modalSlices = createSlice({
	name: 'modalSlice',
	initialState,
	reducers: {
		showModal: <K extends ModalKey>(
			state: ModalState,
			action: {
				payload: { key: ModalKey; payload: ModalKeyToPayload[K] };
			}
		) => {
			state.isShow = true;
			state.key = action.payload.key;
			state.payload = action.payload.payload;
		},
		hideModal: (state) => {
			state.isShow = false;
			state.key = ModalKey.Default;
			state.payload = {};
		}
	}
});

export const modalActions = modalSlices.actions;
export const modalReducers = modalSlices.reducer;
