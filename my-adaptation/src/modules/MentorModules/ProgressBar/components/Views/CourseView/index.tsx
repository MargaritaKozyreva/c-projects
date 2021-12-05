import React from 'react';
import { useSelector } from 'react-redux';
import { WithSkeleton } from '@ui/components/WithSkeleton';
import { CourseState } from '@modules/InternModules/Course/redux/CourseSlices';
import { H1, Span } from '@ui/components/Typography';
import Button from '@ui/components/Button';
import InfoBlock from '@modules/InternModules/Course/components/CourseCard/InfoBlock';
import { Link } from 'react-router-dom';
import ArrowDirection from '@icons/ArrowDirection';
import Zone from '@ui/components/Card/Zone';
import './styles.scss';

export const CourseView: React.FC = () => {
	const state = useSelector((state: { courses: CourseState }) => state.courses);
	const courseData = state.courses.entities[0];

	return (
		<WithSkeleton
			isLoading={ state.courses.isLoading }
			isEmpty={ state.courses.entities.length === 0 }
		>
			<div className="course-view">
				<Link to="/adaptation">
					<div className="course-view__nav">
						<Zone justifyContent="flex-start" margin="none">
							<ArrowDirection direction="left" />
							<Span>Назад</Span>
						</Zone>
					</div>
				</Link>
				<div>
					<H1>{ courseData?.title || '' }</H1>
				</div>
				<div className="newRow">
					<div>
						<InfoBlock
							text={ 'Назначение:' }
							value={ courseData?.start_usage_date }
						/>
						<InfoBlock
							text={ 'Завершить до:' }
							value={ courseData?.plan_finish_date }
							icon={ 'fire' }
						/>
						<InfoBlock
							text={ 'Всего баллов:' }
							value={ `${ courseData?.score } из ${ courseData?.max_score }` }
						/>
					</div>

					<div className="buttons_right">
						<div className="button_padding">
							<Button mode="secondary">Ошибки в курсе</Button>
						</div>
						<div className="button_padding">
							<Button>Завершить курс</Button>
						</div>
					</div>
				</div>
			</div>
		</WithSkeleton>
	);
};
