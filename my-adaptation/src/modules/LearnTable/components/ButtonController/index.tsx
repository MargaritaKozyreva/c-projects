import { LearnTableDTO } from '@modules/LearnTable/dataContext/LearnTableDTO.dto';
import { modalActions, ModalKey } from '@modules/Modal/redux/ModalSlices';
import Button from '@ui/components/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Location } from 'react-router-dom';

interface Props {
	item: LearnTableDTO.ITableItem;
	url: Location;
}

const ButtonController: React.FC<Props> = (props) => {
	const { item, url } = props;

	const dispatch = useDispatch();

	if (item.type === 'event') {
		switch (item.state) {
			case 0:
				return (
					<Button
						size="m"
						type="button"
						mode="primary"
						onClick={ () => {
							dispatch(modalActions.showModal({
								key: ModalKey.Process,
								payload: { event: item as LearnTableDTO.IEvent }
							}));
						} }
					>
						{ item.action?.text }
					</Button>
				);

			default:
				return (
					<Link to={ `${ url.pathname }/${ item.type }/${ item.id }` }>
						<Button onClick={ () => {} } mode="secondary">
							{ item.action?.text }
						</Button>
					</Link>
				);
		}
	} else {
		return (
			<Link to={ `${ url.pathname }/${ item.type }/${ item.id }` }>
				<Button onClick={ () => {} } mode="secondary">
					{ item.action?.text }
				</Button>
			</Link>
		);
	}
};

export default ButtonController;
