import { ProgressDTO } from './ProgressDTO.dto';
import {
	httpServiceMock,
	ResponseResult
} from '../../../core/httpService/service';

class _ProgressContext {
	getUserProgress(): ResponseResult<ProgressDTO.Progress> {
		return httpServiceMock<ProgressDTO.Progress>({
			percent: 50,
			endDate: '01.01.2021'
		});
	}

	getSteps(): ResponseResult<ProgressDTO.Step[]> {
		return httpServiceMock<ProgressDTO.Step[]>([
			{
				title: 'Этап 1',
				num: 1,
				stepState: 'current'
			},
			{
				title: 'Этап 2',
				num: 3,
				stepState: 'active'
			},
			{
				title: 'Этап 3',
				num: 1,
				stepState: 'available'
			},
			{
				title: 'Этап 4',
				num: 1,
				stepState: 'locked'
			}
		]);
	}
}

export const ProgressContext = new _ProgressContext();
