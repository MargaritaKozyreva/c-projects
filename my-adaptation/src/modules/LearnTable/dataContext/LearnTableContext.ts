import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { httpService } from '@core/httpService/service';
import { AxiosPromise } from 'axios';

class LearnTableContext {
	getEducationListByStepNumber(stepNum: number = 1): any {
		const data = httpService('GET', 'getListByStepId', `step_num=${ String(stepNum) }`);
		return data;
	}
}

export const learnTableContext = new LearnTableContext();
