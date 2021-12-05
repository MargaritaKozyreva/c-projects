import { ProgressDTO } from './ProgressDTO.dto';
import {
	httpService,
	ResponseResult
} from '../../../../core/httpService/service';
import { AxiosPromise } from 'axios';
class ProgressContext {
	getUserProgress(): ResponseResult<ProgressDTO.Progress> {
		return httpService('GET', 'getUserProgress');
	}

	getSteps(): AxiosPromise<ProgressDTO.Step[]> {
		return httpService('GET', 'getSteps');
	}
}

export const progressContext = new ProgressContext();
