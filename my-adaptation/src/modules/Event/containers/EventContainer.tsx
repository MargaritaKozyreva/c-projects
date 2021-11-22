import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import { EventState, eventActions } from '../redux/EventSlices';
import { EventDTO } from '../dataContext/EventDTO.dto';
import Card from '@ui/components/Card';
import { H1, H3, H4, P, Span } from '@ui/components/Typography';
import './styles.scss';

interface EventContainerProps {
	eventId: string | undefined;
}

const EventContainer: React.FC<EventContainerProps> = (props) => {
	const { eventId } = props;
	const dispatch = useDispatch();
	const eventResponse = useSelector((state: { events: EventState }) => state.events);

	useEffect(() => {
		dispatch(eventActions.getEventByIdPending(String(eventId)));
	}, [dispatch]);

	console.log(eventResponse.events);

	return (
		<WithSkeleton
			isLoading={ eventResponse.events.isLoading }
			isEmpty={ eventResponse.events.entities.length === 0 }
		>
			{ eventResponse.events.entities.map((event: EventDTO.IEvent) => (
				<div className="event-card" key={ event.id }>
					<Card design="default">
						<Card.Zone margin="none" line="bottom">
							<Card.Zone margin="l">
								<H4>Информация о мероприятии</H4>
							</Card.Zone>
						</Card.Zone>
						<Card.Content margin="l">
							<Card.Zone direction="row" margin="none">
								<Card.Zone direction="column" margin="none">
									<Span size="xs" transform="uppercase">
										Где будет проходить <br />
										{ event.info.place }
									</Span>
									<Span size="xs" transform="uppercase">
										Форма проведения
										<br />
										{ event.info.type }
									</Span>
								</Card.Zone>
								<Card.Zone direction="column" margin="none">
									<Span size="xs" transform="uppercase">
										Дата и время окончания <br />
										{ event.info.dateEnd }
									</Span>

									<Span size="xs" transform="uppercase">
										Дата и время проведения <br />
										{ event.info.dateStart }
									</Span>
								</Card.Zone>
								<Card.Zone direction="column" margin="none">
									<Span size="xs" transform="uppercase">
										Количество участников <br />
										{ event.info.personCount }
									</Span>

									<Span size="xs" transform="uppercase">
										Статус <br />
										{ event.info.state }
									</Span>
								</Card.Zone>
							</Card.Zone>
						</Card.Content>
						<Card.Zone margin="none" direction="column" line="top">
							<Card.Zone
								direction="row"
								margin="l"
								alignItems="center"
								justifyContent="space-around"
							>
								<Span size="xs" weight="bold">
									{ event.info.mentor }
								</Span>
								<Span size="xs" weight="bold">
									{ event.info.mentorPosition }
								</Span>
							</Card.Zone>
						</Card.Zone>
					</Card>
				</div>
			)) }
		</WithSkeleton>
	);
};

export default EventContainer;
