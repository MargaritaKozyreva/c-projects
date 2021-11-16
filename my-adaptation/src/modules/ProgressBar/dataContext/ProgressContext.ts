import { ProgressDTO } from './ProgressDTO.dto';
import {
	httpService,
	httpServiceMock,
	ResponseResult
} from '../../../core/httpService/service';
import { AxiosPromise } from 'axios';
class _ProgressContext {
	getUserProgress(): ResponseResult<ProgressDTO.Progress> {
		return httpServiceMock<ProgressDTO.Progress>({
			percent: 50,
			endDate: '01.01.2021'
		});
	}

	getSteps(): AxiosPromise<ProgressDTO.Step[]> {
		return httpService.get('apaptation?action=getListByStepId');
	}
}

export const ProgressContext = new _ProgressContext();
