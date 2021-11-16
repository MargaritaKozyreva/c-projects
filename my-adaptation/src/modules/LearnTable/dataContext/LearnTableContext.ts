import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { httpService } from '@core/httpService/service';
import { AxiosPromise } from 'axios';

class _LearnTableContext {
	getEducationListByStepId(id: number): any {
		return httpService.get(`apaptation&action=getListByStepId&id=${ id }`);
	}
}

export const LearnTableContext = new _LearnTableContext();
