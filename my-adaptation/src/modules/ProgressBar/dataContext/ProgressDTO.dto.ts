export namespace ProgressDTO {
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

	export type ProgressData = {
		progress: Progress;
		steps: Step[];
	};
}
