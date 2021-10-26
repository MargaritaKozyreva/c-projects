import { LearnTableDTO } from './LearnTableDTO.dto';
import {
	httpServiceMock,
	ResponseResult
} from '../../../core/httpService/service';

class _LearnTableContext {
	getEducationList(): ResponseResult<LearnTableDTO.LearnList> {
		return httpServiceMock<LearnTableDTO.LearnList>([
			{
				id: 6948094666445191657,
				clever: 0,
				name: 'Тренинг #PROклиента',
				state: 0,
				type: 'event',
				url: '/view_doc.html?mode=event&object_id=6948094666445191657'
			},
			{
				id: 6948094666445191687,
				clever: 5,
				name: 'Плановые показатели работы магазина',
				state: 4,
				type: 'event',
				url: '/view_doc.html?mode=event&object_id=6948094666445191687'
			},
			{
				id: 7015107287547255075,
				clever: 0,
				name: 'Основы санитарии и гигиены',
				state: 3,
				type: 'course',
				url: '/learning_stat?&object_id=7015107287547255075'
			},
			{
				id: 7017843247458377233,
				clever: 5,
				name: 'Дистанционный курс по работе в системе Kronos',
				state: 4,
				type: 'course',
				url: '/learning_proc?&object_id=7017843247458377233'
			}
		]);
	}
}

export const LearnTableContext = new _LearnTableContext();
