import { ProgressDTO } from '../ProgressDTO.dto';
import { httpServiceMock, ResponseResult } from '@core/httpService/service';

class _ProgressContext {
	getUserProgress(): ResponseResult<ProgressDTO.Progress> {
		return httpServiceMock<ProgressDTO.Progress>({
			percent: 50,
			endDate: '01.01.2021',
		});
	}

	getSteps(): ResponseResult<Array<ProgressDTO.ProgressData['steps']>> {
		return httpServiceMock<ProgressDTO.ProgressData['steps'][]>([{
			data: [
				{
					title: 'Этап 1',
					num: 1,
					stepState: 'selected',
					dateStart: '01.01.2021', //дата начала этапа
					dateEnd: '30.01.2021', //дата завершения этапа
				},
				{
					title: 'Этап 2',
					num: 2,
					stepState: 'active',
					dateStart: '01.02.2021', //дата начала этапа
					dateEnd: '28.02.2021', //дата завершения этапа
				},
				{
					title: 'Этап 3',
					num: 3,
					stepState: 'available',
					dateStart: '01.03.2021', //дата начала этапа
					dateEnd: '30.03.2021', //дата завершения этапа
				},
				{
					title: 'Этап 4',
					num: 4,
					stepState: 'locked',
					dateStart: '01.04.2021', //дата начала этапа
					dateEnd: '30.04.2021', //дата завершения этапа
				},
			],
		}]);
	}
}

export const ProgressContext = new _ProgressContext();
