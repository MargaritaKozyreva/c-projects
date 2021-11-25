import { ProgressDTO } from '../ProgressDTO.dto';
import { httpServiceMock, ResponseResult } from '@core/httpService/service';

class ProgressContext {
	getUserProgress(): ResponseResult<ProgressDTO.Progress> {
		return httpServiceMock<ProgressDTO.Progress>({
			percent: 50,
			endDate: '01.01.2021'
		});
	}

	getSteps(): ResponseResult<Array<ProgressDTO.ProgressData['steps']>> {
		return httpServiceMock<ProgressDTO.ProgressData['steps'][]>([
			{
				data: [
					{
						title: 'Этап 1',
						num: 1,
						stepState: 'selected',
						dateStart: '01.01.2021', //дата начала этапа
						dateEnd: '01.02.2021' //дата завершения этапа
					},
					{
						title: 'Этап 2',
						num: 2,
						stepState: 'locked',
						dateStart: '01.02.2021', //дата начала этапа
						dateEnd: '01.06.2021' //дата завершения этапа
					}
				]
			}
		]);
	}
}

export const progressContext = new ProgressContext();
