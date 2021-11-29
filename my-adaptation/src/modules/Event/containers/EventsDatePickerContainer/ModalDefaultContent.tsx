import React from 'react';
import Modal from '../../../Modal/containers/ModalContainer';
import Button from '@ui/components/Button';
import DayPickerSingleDate from '@ui/components/DayPickerSingleDate';
import { useDispatch } from 'react-redux';
import { modalActions } from '@modules/Modal/redux/ModalSlices';
import { Span } from '@ui/components/Typography';

const ModalDefaultContent = (props: any) => {
	const {
		notification,
		events,
		date,
		setDate,
		closeModal,
		renderDayContents,
		nameEvent,
		recordEvent,
		WarningInfo
	} = props;

	const dispatch = useDispatch();

	return (
		<>
			<Modal.Header>
				<div className="modal-header-container">
					<Span className="header-title">Выберите дату, чтобы записаться</Span>
					<button className="button--close" onClick={ closeModal }>
						&times;
					</button>
				</div>
			</Modal.Header>
			<Modal.Body>
				<div className="modal-body-container">
					<div className="moda-body-title">{ nameEvent }</div>
					<div style={ { height: '320px' } }>
						<DayPickerSingleDate
							date={ date }
							setDate={ setDate }
							renderDayContents={ renderDayContents }
							widthResize={ 800 }
						/>
					</div>
					<div className="info-container">
						<div className="info-body">
							<div className="circle-information circle-information__purple" />
							<div> - Даты, в которые будет проходить мероприятие</div>
						</div>
						<div className="info-body">
							<div className="circle-information circle-information__orange" />
							<div className="info-title">
								{ ' ' }
								- Даты, в которые вы уже записаны на другие мероприятия
							</div>
						</div>
					</div>
					{ notification.length > 0 && <WarningInfo /> }
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div className="modal-footer-container">
					<Button onClick={ () => dispatch(modalActions.hideModal()) }>
						Отмена
					</Button>
					<Button onClick={ recordEvent }>Записаться</Button>
				</div>
			</Modal.Footer>
		</>
	);
};

export default ModalDefaultContent;
