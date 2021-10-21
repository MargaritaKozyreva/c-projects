import { MyAdaptationDTO } from './MyAdaptationDTO.dto';
import {
	httpServiceMock,
	ResponseResult
} from '../../../core/httpService/service';

class _MyAdaptationContext {
	getUserProgress(): ResponseResult<MyAdaptationDTO.Progress> {
		return httpServiceMock<MyAdaptationDTO.Progress>({
			percent: 50,
			endDate: '01.01.2021'
		});
	}

	getSteps(): ResponseResult<MyAdaptationDTO.Step[]> {
		return httpServiceMock<MyAdaptationDTO.Step[]>([
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

	getEducationList(): ResponseResult<MyAdaptationDTO.EducationList> {
		return httpServiceMock<MyAdaptationDTO.EducationList>([
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

export const MyAdaptationContext = new _MyAdaptationContext();
