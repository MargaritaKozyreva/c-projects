import EventRegistrationDone from '@modules/Event/containers/EventsDatePickerContainer/EventRegistrationDone/EventRegistrationDone';
import EventRegistrationProcess from '@modules/Event/containers/EventsDatePickerContainer/EventRegistrationProcess/EventRegistrationProcess';
import { ModalKey, ModalKeyToPayload } from '@modules/Modal/redux/ModalSlices';
import React from 'react';

export const MODAL_KEY_TO_COMPONENT_MAP: {
	[key in ModalKey]: React.FC<{ payload: ModalKeyToPayload[key] }>;
} = {
	[ModalKey.Default]: () => <div />,
	[ModalKey.Process]: ({ payload }) => (
		<EventRegistrationProcess { ...payload } />
	),
	[ModalKey.Done]: ({ payload }) => <EventRegistrationDone { ...payload } />
};

// export function openModal<K extends ModalKey>(
// 	key: K,
// 	payload: ModalKeyToPayload[K]
// ): ModalKeyToPayload[K];

// const Component = MODAL_KEY_TO_COMPONENT_MAP['PROCESS'];

// const payload = openModal(ModalKey.Process, {
// 	eventId: 1
// });
