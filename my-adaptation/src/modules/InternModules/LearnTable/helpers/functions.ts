import React from 'react';
import { Camera, Event, Laptop, OpenBook, Pencil } from '@icons/index';
import { LearnTableDTO } from '../dataContext/LearnTableDTO.dto';
import { ReactNode } from 'react';
enum StatusColor {
	'progress' = 1,
	'finished' = 2,
	'fail' = 3,
	'success' = 4
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

enum EducationItemTitleRU {
	'course' = 'Курс',
	'assessment' = 'Тест',
	'event' = 'Мероприятие',
	'task' = 'Задание',
	'video' = 'Видео'
}
export const educationItemIcon: {
	type: string;
	icon: any;
}[] = [
	{
		type: 'course',
		icon: Laptop
	},
	{
		type: 'assessment',
		icon: Pencil
	},
	{
		type: 'event',
		icon: Event
	},
	{
		type: 'task',
		icon: OpenBook
	},
	{
		type: 'video',
		icon: Camera
	}
];

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
	return {
		status,
		statusColor: StatusColor[item.state],
		titleRU: EducationItemTitleRU[item.type]
	};
};

//TODO Как присвоить дийствие кнопке в зависимости от статуса?
//Например мне нужно открывать модальное окно с календарем если есть статус записи на мероприятие в кнопке
