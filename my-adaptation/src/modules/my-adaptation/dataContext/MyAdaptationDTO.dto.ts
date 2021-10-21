export namespace MyAdaptationDTO {
	export type Progress = {
		percent: number; // Сколько процентов пройдено
		endDate: string; // До какой даты возможно пройти этот этап
	};

	/**
	 * active - Является текущим этапом, на котором находится сотрудник
	 * current - Является выбранным этапом, на который по клику сотрудник перешёл в данный момент времени
	 * available - Доступен к переходу так как уже был пройден ранее
	 */
	export type StepState = 'active' | 'current' | 'available' | 'locked';

	export type Step = {
		title: string; //название этапа
		num: number; //номер этапа
		stepState: StepState; //состояние этапа
	};

	export interface ITableItem {
		id: string | number;
		clever: number;
		name: string;
		state: number;
		type: string;
        url: string;
	}
	export interface ICourse extends ITableItem {
		type: 'course';
	}
	export interface IAssessment extends ITableItem {
		type: 'assessment';
	}
	export interface IEvent extends ITableItem {
		type: 'event';
	}
	export interface IVideo extends ITableItem {
		type: 'video';
	}
	export type EducationList = Array<ICourse | IAssessment | IEvent | IVideo>;
}
