export namespace EventDTO {
	export interface IEvent {
		id: string;
		title: string;
		info: {
			place: string;
			type: string;
			dateStart: string;
			dateEnd: string;
			personCount: number;
			state: string;
			mentor: string;
			mentorPosition: string;
		};
		attachFiles: any;
	}

	export interface IEventCalendar {
		id: string | number;
		name: string;
		date: string;
		address: string;
	}
}
