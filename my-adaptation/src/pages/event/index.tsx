import React from 'react';
import { useParams } from 'react-router';
import { Page } from '@ui/components/Page';
import EventContainer from '@modules/Event/containers/EventCardContainer';

const EventPage: React.FC = () => {
	const { id } = useParams();
	return (
		<Page title="Мероприятие">
			<EventContainer eventId={ id } />
		</Page>
	);
};

export { EventPage };
