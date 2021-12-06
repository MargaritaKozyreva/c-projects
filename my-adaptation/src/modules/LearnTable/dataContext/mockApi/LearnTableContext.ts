import { LearnTableDTO } from '../LearnTableDTO.dto';
import {
	httpServiceMock,
	ResponseResult
} from '../../../../core/httpService/service';

class LearnTableContext {
	getEducationListByStepNumber(stepNum: number = 1): ResponseResult<Array<LearnTableDTO.LearnListData>> {
		return httpServiceMock<Array<LearnTableDTO.LearnListData>>([
			{
				data: {
					position: 'ДМ',
					step_num: 1,
					headerList: ['Тип', 'clever', 'Название', 'Статус'],
					blocks: [
						{
							id: '112233',
							title: 'Блок 1',
							status: 4,
							list: [
								{
									id: '6948094666445191657',
									clever: 0,
									name: 'Тренинг #PROклиента',
									state: 0,
									type: 'event',
									action: {
										text: 'Записаться',
										action:
											'/view_doc.html?mode=event&object_id=6948094666445191657'
									}
								},
								{
									id: '6948094666445191687',
									clever: 5,
									name: 'Плановые показатели работы магазина',
									state: 4,
									type: 'event',
									action: {
										text: 'Смотреть',
										action:
											'/view_doc.html?mode=event&object_id=6948094666445191657'
									}
								},
								{
									id: '7015107287547255075',
									clever: 0,
									name: 'Основы санитарии и гигиены',
									state: 3,
									type: 'course',
									action: {
										text: 'Смотреть',
										action:
											'/view_doc.html?mode=event&object_id=6948094666445191657'
									}
								},
								{
									id: '7017843247458377233',
									clever: 5,
									name: 'Дистанционный курс по работе в системе Kronos',
									state: 4,
									type: 'course',
									action: {
										text: 'Смотреть',
										action:
											'/view_doc.html?mode=event&object_id=6948094666445191657'
									}
								}
							]
						},
						{
							id: '44443446',
							title: 'Блок 2',
							status: 4,
							list: [
								{
									id: '6948094666445191657',
									clever: 0,
									name: 'Тренинг Новый',
									state: 1,
									type: 'event',
									date_start: '21.11.2021 11.00',
									action: {
										text: 'Смотреть',
										action:
											'/view_doc.html?mode=event&object_id=6948094666445191657'
									}
								},
								{
									id: '6948094666445191687',
									clever: 5,
									name: 'Плановые показатели работы магазина',
									state: 4,
									type: 'event',
									action: {
										text: 'Смотреть',
										action:
											'/view_doc.html?mode=event&object_id=6948094666445191657'
									}
								},
								{
									id: '7015107287547255075',
									clever: 0,
									name: 'Основы санитарии и гигиены',
									state: 3,
									type: 'course',
									action: {
										text: 'Смотреть',
										action:
											'/view_doc.html?mode=event&object_id=6948094666445191657'
									}
								},
								{
									id: '7017843247458377233',
									clever: 5,
									name: 'Дистанционный курс по работе в системе Kronos',
									state: 4,
									type: 'course',
									action: {
										text: 'Смотреть',
										action:
											'/view_doc.html?mode=event&object_id=6948094666445191657'
									}
								}
							]
						}
					]
				}
			}
		]);
	}
}

export const learnTableContext = new LearnTableContext();
