export namespace ProgressDTO {
	export type Progress = {
		percent: number; // Сколько процентов пройдено
		endDate: string; // До какой даты возможно пройти этот этап
	};

	/**
	 * active - Является текущим этапом, на котором находится сотрудник
	 * selected - Является выбранным этапом, на который по клику сотрудник перешёл в данный момент времени
	 * available - Доступен к переходу так как уже был пройден ранее
	 * readonly - Доступен только для просмотра 
	 */
	export type StepState = 'active' | 'selected' | 'available' | 'readonly';

	export type Step = {
		title: string; //название этапа
		num: number; //номер этапа
		stepState: StepState; //состояние этапа
		dateStart: string; //дата начала этапа
		dateEnd: string; //дата завершения этапа
	};

	export type ProgressData = {
		progress: Progress;
		steps: {
			data: Step[]
		};
	};

}
