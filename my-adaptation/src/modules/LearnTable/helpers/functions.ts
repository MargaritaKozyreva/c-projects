import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
enum StatusColor {
	'IN PROGRESS' = 1,
	'FINISHED' = 2,
	'FAIL' = 3,
	'SUCCESS' = 4
}
enum EventStatus {
	'Не записан' = 0,
	'Записан' = 1,
	'Пройден' = 4
}
enum CourseStatus {
	'Не начат' = 0,
	'В процессе' = 1,
	'Завершен' = 2,
	'Не пройден' = 3,
	'Пройден' = 4
}

enum AssessmentStatus {
	'Не начат' = 0,
	'В процессе' = 1,
	'Завершен' = 2,
	'Не пройден' = 3,
	'Пройден' = 4
}

enum TaskStatus {
	'Не начато' = 0,
	'В процессе' = 1,
	'Не выполнено' = 3,
	'Выполнено' = 4
}

export const setState = (item: LearnTableDTO.ITableItem) => {
	let status = null;
	
	switch (item.type) {
		case 'event':
			status = EventStatus[item.state];
			if (item.date_start && item.state === 1) {
				status = `Записан ${ item.date_start }`;
			}
			break;

		case 'course':
			status = CourseStatus[item.state];

			break;

		case 'assessment':
			status = AssessmentStatus[item.state];
			break;

		case 'task':
			status = TaskStatus[item.state];
			break;

		default:
			null;
	}
	return { status, color: StatusColor[item.state] };
};
