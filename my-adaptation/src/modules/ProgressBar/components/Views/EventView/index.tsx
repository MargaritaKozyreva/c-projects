import React from 'react';
import { useSelector } from 'react-redux';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import { EventState } from '@modules/Event/redux/EventSlices';
import { EventDTO } from '@modules/Event/dataContext/EventDTO.dto';
import StartEvent from './StartEvent';
import Zone from '@ui/components/Card/Zone';
import { Chips } from '@ui/components/Chips';
import { H1, Span } from '@ui/components/Typography';
import './styles.scss';
import { Link } from 'react-router-dom';
import ArrowDirection from '@icons/ArrowDirection';

export const EventView: React.FC = () => {
	const eventsState = useSelector((state: { events: EventState }) => state.events.events);
	const eventData = useSelector((state: { events: EventState }) => state.events.events.entities[0]);

	return (
		<WithSkeleton
			isLoading={ eventsState.isLoading }
			isEmpty={ eventsState.entities.length === 0 }
		>
			<div className="event-view" key={ eventData?.id }>
				<div className="event-view__nav">
					<Link to="/adaptation">
						<Zone justify="flex-start" margin="none">
							<ArrowDirection direction="left" />
							Адаптация
						</Zone>
					</Link>
				</div>
				<Zone justify="space-between" margin="none">
					<Zone justify="flex-start" align="center" margin="none">
						<div className="event-view__title">
							<H1>{ eventData?.title }</H1>
						</div>
						<Chips design="warning" size="s">
							Пройти до { eventData?.info.dateEnd }
						</Chips>
					</Zone>

					<StartEvent start_date={ eventData?.info.dateStart } />
				</Zone>
			</div>
		</WithSkeleton>
	);
};
