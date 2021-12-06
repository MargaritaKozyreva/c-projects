import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import { EventState, eventActions } from '../../redux/EventSlices';
import { EventDTO } from '../../dataContext/EventDTO.dto';
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
								<H4>Информация о ближайшем мероприятии</H4>
							</Card.Zone>
						</Card.Zone>
						<Card.Zone
							direction="row"
							margin="l"
							justifyContent="space-between"
						>
							<Card.Zone direction="column" margin="none">
								<div style={ { marginBottom: '40px' } }>
									<Span size="xs" color="second" transform="uppercase">
										Где будет проходить <br />
									</Span>
									<Span size="xs">{ event.info.place }</Span>
								</div>
								<div>
									<Span size="xs" color="second" transform="uppercase">
										Форма проведения
										<br />
									</Span>
									<Span size="xs">{ event.info.type }</Span>
								</div>
							</Card.Zone>
							<Card.Zone direction="column" margin="none">
								<div style={ { marginBottom: '40px' } }>
									<Span size="xs" color="second" transform="uppercase">
										Дата и время окончания <br />
									</Span>
									<Span size="xs">{ event.info.dateEnd }</Span>
								</div>
								<div>
									<Span size="xs" color="second" transform="uppercase">
										Дата и время проведения <br />
									</Span>
									<Span size="xs">{ event.info.dateStart }</Span>
								</div>
							</Card.Zone>
							<Card.Zone direction="column" margin="none">
								<div style={ { marginBottom: '40px' } }>
									<Span size="xs" color="second" transform="uppercase">
										Количество участников <br />
									</Span>
									<Span size="xs">{ event.info.personCount }</Span>
								</div>
								<div>
									<Span size="xs" color="second" transform="uppercase">
										Статус <br />
									</Span>
									<Span size="xs">{ event.info.state }</Span>
								</div>
							</Card.Zone>
						</Card.Zone>

						<Card.Zone margin="none" direction="column" line="top">
							<Card.Zone
								direction="row"
								margin="l"
								alignItems="flex-end"
								justifyContent="flex-start"
							>
								<div style={ { marginRight: '24px' } }>
									<Span size="xs" color="second" transform="uppercase">
										Тренер <br />
									</Span>
									<Span size="xs">{ event.info.mentor }</Span>
								</div>
								<Span size="xs" weight="bold" color="second">
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
