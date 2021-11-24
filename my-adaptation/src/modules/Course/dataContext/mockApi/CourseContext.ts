import { CourseDTO } from '../CourseDTO.dto';
import {
	httpServiceMock,
	ResponseResult
} from '../../../../core/httpService/service';

class CourseContext {
	getCourseById(id: string): ResponseResult<Array<CourseDTO.ICourse>> {
		return httpServiceMock<Array<CourseDTO.ICourse>>([
			{
				id: id,
				title: 'Курс',
				state: 4,
				plan_finish_date: '21.11.2021',
				start_usage_date: '15.11.2021',
				max_score: 100,
				score: 13,
				info: {
					parts_count: 3,
					parts: [
						{
							id: 1314524,
							title: 'Module 1',
							type: 'lesson',
							desc: 'description',
							state_id: 1,
							score: 13,
							url: '/webtutor/X5_GK_6_course_ORG/index_lms.html',
							last_usage_date: '17.11.2021'
						},
						{
							id: 1304524,
							title: 'Module 2',
							type: 'resource',
							desc: 'description',
							state_id: 0,
							score: 0,
							url: 'x-local://wt_data/attachments/6901661006358734543.pdf'
						}
					]
				}
			}
		]);
	}
}

export const courseContext = new CourseContext();
