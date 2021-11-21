import React from 'react';
import { useSelector } from 'react-redux';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import { EventState } from '@modules/Event/redux/EventSlices';
import { EventDTO } from '@modules/Event/dataContext/EventDTO.dto';

const EventInfoBarContainer: React.FC = () => {
	const eventInfoData = useSelector((state: { events: EventState }) => state.events);

	return (
		<WithSkeleton
			isLoading={ eventInfoData.events.isLoading }
			isEmpty={ eventInfoData.events.entities.length === 0 }
		>
			{ eventInfoData.events.entities.map((event: EventDTO.IEvent) => (
				<>
					<h1 className="c-header">{ event.title }</h1>
				</>
			)) }
		</WithSkeleton>
	);
};

export default EventInfoBarContainer;
