export namespace LearnTableDTO {
	export interface ITableItem {
		id: string | number;
		clever: number;
		name: string;
		state: number;
		type: string;
		action: {
			text: string;
			action: string;
		};
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
	export type LearnList = Array<ICourse | IAssessment | IEvent | IVideo>;

	export type IBlock = {
		id: string | number;
		title: string;
		status: number;
		list: LearnList;
	};

	export type LearnListObj = {
		position: string;
		step_num: number;
		headerList: Array<string>;
		blocks: IBlock[];
	};

	export type LearnListData = {
		data: LearnListObj;
	};
}
