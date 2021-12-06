import React, { useEffect, useState } from 'react';
import Button from '@ui/components/Button';
import { IconImportant } from '@ui/components/icons/IconImportant';
import cn from 'classnames';
import './styles.scss';

type StartEventProps = Props & HTMLAttributesProps;

interface Props {
	[key: string]: any;
	is_finished?: 'true' | '';
	start_date: string | undefined;
}

interface HTMLAttributesProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const StartEvent: React.FC<StartEventProps> = ({
	start_date,
	link,
	is_finihsed = '',
	margin ///...attrs
}) => {
	const [show, setShow] = useState(false);

	const customStyle = cn({
		'start-event-container stop': is_finihsed === 'true',
		'start-event-container': is_finihsed === ''
	});
	//const StartEvent = (props) => {

	//let color = is_finihsed ? 'green' : 'red';

	let timeLeft = {
		days: 0,
		hours: 0,
		minutes: 0
	};

	const delay = 5;

	useEffect(() => {
		const difference_start = +new Date('2021/11/21') - +new Date();
		console.log(difference_start);
		if (difference_start > 0) {
			timeLeft = {
				days: Math.floor(difference_start / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference_start / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference_start / 1000 / 60) % 60)
			};
		} else {
			timeLeft = {
				days: 0,
				hours: 0,
				minutes: 0
			};
		}

		const timer1 = setTimeout(() => setShow(true), delay * 1000);
		return () => {
			clearTimeout(timer1);
		};
	}, []);

	return (
		<div className={ customStyle } style={ { margin: margin } }>
			<div className="start-event-head-text">Начало через</div>
			<div className="start-event-body">
				<p>
					<span className="bold"> { delay }</span>
					<span className="normal"> дней</span>
					<span className="bold"> { timeLeft['hours'] }</span>
					<span className="normal"> часа</span>
					<span className="bold"> { timeLeft['minutes'] }</span>
					<span className="normal"> минут</span>
				</p>
			</div>
			{ is_finihsed ? (
				<Button
					onClick={ () => {
						console.log(link);
					} }
					mode="ghost"
					disabled
				>
					<IconImportant /> Закончилось
				</Button>
			) : (
				<Button
					mode="primary"
					onClick={ () => {
						console.log(link);
					} }
				>
					Перейти
				</Button>
			) }
		</div>
	);
};

export default StartEvent;
