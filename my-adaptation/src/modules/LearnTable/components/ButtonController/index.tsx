import { LearnTableDTO } from '@modules/LearnTable/dataContext/LearnTableDTO.dto';
import { modalActions, ModalKey } from '@modules/Modal/redux/ModalSlices';
import Button from '@ui/components/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Location } from 'react-router-dom';

const ButtonController = (props: LearnTableDTO.ITableItem & {
		url: Location;
	}) => {
	const { type, state, id, action, url } = props;

	const dispatch = useDispatch();

	if (type === 'event') {
		switch (state) {
			case 0:
				return (
					<Button
						size="m"
						type="button"
						mode="primary"
						onClick={ () => {
							dispatch(modalActions.showModal({
								key: ModalKey.Process,
								payload: { eventId: 1 }
							}));
						} }
					>
						{ action?.text }
					</Button>
				);

			default:
				return (
					<Link to={ `${ url.pathname }/${ type }/${ id }` }>
						<Button onClick={ () => {} } mode="secondary">
							{ action?.text }
						</Button>
					</Link>
				);
		}
	} else {
		return (
			<Link to={ `${ url.pathname }/${ type }/${ id }` }>
				<Button onClick={ () => {} } mode="secondary">
					{ action?.text }
				</Button>
			</Link>
		);
	}
};

export default ButtonController;
