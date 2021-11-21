import { EventPage } from '../../pages/event';
import { CoursePage } from '../../pages/course';

export default [
	{
		name: 'educationList',
		path: '/event/:id',
		component: EventPage,
		exact: true
	},
	{
		name: 'educationList',
		path: '/course/:id',
		component: CoursePage,
		exact: true
	}
];
