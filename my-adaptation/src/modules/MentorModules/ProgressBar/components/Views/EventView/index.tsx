import React from 'react';
import { useSelector } from 'react-redux';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import { EventState } from '@modules/InternModules/Event/redux/EventSlices';
import { EventDTO } from '@modules/InternModules/Event/dataContext/EventDTO.dto';
import StartEvent from './StartEvent';
import Zone from '@ui/components/Card/Zone';
import { Chips } from '@ui/components/Chips';
import { H1, Span } from '@ui/components/Typography';
import './styles.scss';

export const EventView: React.FC = () => {
	const eventsState = useSelector((state: { events: EventState }) => state.events.events);

	return (
		<WithSkeleton
			isLoading={ eventsState.isLoading }
			isEmpty={ eventsState.entities.length === 0 }
		>
			{ eventsState.entities.map((event: EventDTO.IEvent) => (
				<Zone key={ event.id } justifyContent="space-between" alignItems="center">
					<Zone>
						<div className="c-adaptation-event-view__title">
							<H1>{ event.title }</H1>
						</div>
						<Chips design="warning" size="s">
							<Span transform="uppercase">Пройти до 01.01.2021</Span>
						</Chips>
					</Zone>
					<StartEvent start_date={ event.info.dateStart } />
				</Zone>
			)) }
		</WithSkeleton>
	);
};
