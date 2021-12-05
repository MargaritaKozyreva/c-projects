import { httpService } from '@core/httpService/service';

class LearnTableContext {
	getEducationListByStepNumber(stepNum: number = 1): any {
		const data = httpService(
			'GET',
			'getListByStepId',
			`step_num=${ String(stepNum) }`
		);
		return data;
	}
}

export const learnTableContext = new LearnTableContext();
