import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { httpService } from '@core/httpService/service';
import { AxiosPromise } from 'axios';

class _LearnTableContext {
	getEducationList(): AxiosPromise<LearnTableDTO.LearnListData> {
		return httpService.get('educations');
	}
}

export const LearnTableContext = new _LearnTableContext();
