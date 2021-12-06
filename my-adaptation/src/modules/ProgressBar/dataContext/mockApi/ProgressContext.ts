import { httpServiceMock, ResponseResult } from '@core/httpService/service';
import { ProgressDTO } from '../ProgressDTO.dto';

class ProgressContext {
	getUserProgress(): ResponseResult<ProgressDTO.Progress> {
		return httpServiceMock<ProgressDTO.Progress>({
			percent: 70,
			endDate: '01.01.2021'
		});
	}

	getSteps(): ResponseResult<Array<ProgressDTO.ProgressData['steps']>> {
		return httpServiceMock<ProgressDTO.ProgressData['steps'][]>([
			{
				data: [
					{
						title: '1-2 нед.',
						num: 1,
						stepState: 'selected',
						dateStart: '01.01.2021', //дата начала этапа
						dateEnd: '14.01.2021' //дата завершения этапа
					},
					{
						title: '3-4 нед.',
						num: 2,
						stepState: 'readonly',
						dateStart: '14.02.2021', //дата начала этапа
						dateEnd: '28.02.2021' //дата завершения этапа
					},
					{
						title: '5-6 нед.',
						num: 3,
						stepState: 'readonly',
						dateStart: '28.02.2021', //дата начала этапа
						dateEnd: '14.03.2021' //дата завершения этапа
					},
					{
						title: 'Комиссия.',
						num: 4,
						stepState: 'readonly'
					},
					{
						title: '7-18 нед.',
						num: 5,
						stepState: 'readonly',
						dateStart: '14.03.2021', //дата начала этапа
						dateEnd: '28.03.2021' //дата завершения этапа
					}
				]
			}
		]);
	}
}

export const progressContext = new ProgressContext();
