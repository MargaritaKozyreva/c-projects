import { EventDTO } from '../EventDTO.dto';
import {
	httpServiceMock,
	ResponseResult
} from '../../../../core/httpService/service';

class EventContext {
	getEventById(id: string): ResponseResult<Array<EventDTO.IEvent>> {
		return httpServiceMock<Array<EventDTO.IEvent>>([
			{
				id: id,
				title: 'Тренинг',
				info: {
					place: 'МСК',
					type: 'Тренинг',
					dateStart: '21.11.2021 10:00',
					dateEnd: '21.11.2021 13:00',
					personCount: 30,
					state: 'Запланированно',
					mentor: 'Козырева Маргарита Анатольевна',
					mentorPosition: 'Региональный HR BP'
				},
				attachFiles: []
			}
		]);
	}
}

export const eventContext = new EventContext();
