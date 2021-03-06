import React from 'react';
import EventContainer from '@modules/InternModules/Event/containers/EventCardContainer';
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
