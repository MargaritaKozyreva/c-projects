import React from 'react';
import EventContainer from '@modules/Event/containers/EventContainer';
import { useParams } from 'react-router';
import { Page } from '@ui/components/Page';

const EventPage: React.FC = () => {
	const { id } = useParams();
	return (
		<Page title="Мероприятие">
			<EventContainer eventId={ id } />
		</Page>
	);
};

export { EventPage };
