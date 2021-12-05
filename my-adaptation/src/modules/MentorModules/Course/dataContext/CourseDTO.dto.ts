export namespace CourseDTO {
	export interface ICourse {
		id: string | number;
		title: string;
		state: number;
		plan_finish_date?: string;
		start_usage_date?: string;
		max_score?: number;
		score?: number;
		info: {
			parts_count: number;
			parts: {
				id: number;
				title: string;
				type: string;
				desc: string;
				state_id: number;
				score: number;
				url: string;
				last_usage_date?: string;
			}[];
		};
	}
}
