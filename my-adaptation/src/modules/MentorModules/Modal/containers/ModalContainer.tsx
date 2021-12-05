import React, { useRef, useEffect, useCallback } from 'react';
import ModalHeader from '../components/Modal/ModalHeader';
import ModalBody from '../components/Modal/ModalBody';
import ModalFooter from '../components/Modal/ModalFooter';
import { createPortal } from 'react-dom';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions, ModalState } from '../redux/ModalSlices';
import { MODAL_KEY_TO_COMPONENT_MAP } from '../components/ModalController';
interface Props {
	isClosable?: any;
	closeOutside?: boolean;
	width?: string | number;
	escapeKey?: boolean;
}

const Modal = (props: Props) => {
	const {
		isClosable = true,
		closeOutside = true,
		width = '100%',
		escapeKey = true
	} = props;

	const dispatch = useDispatch();
	const modalState = useSelector((state: { modal: ModalState }) => state.modal);
	const modalRef: React.MutableRefObject<null> = useRef(null);
	const className = modalState.isShow
		? 'modal-clever show'
		: 'modal-clever hide';

	const handleUserKeyPress = useCallback(
		(e) => {
			if (e.code === 'Escape' && escapeKey && isClosable) {
				dispatch(modalActions.hideModal());
			}
		},
		[dispatch, modalState, isClosable]
	);

	const clickOutside = useCallback(
		(e) => {
			if (closeOutside && e.target === modalRef.current && isClosable) {
				dispatch(modalActions.hideModal());
			}
		},
		[dispatch, modalState, isClosable]
	);

	useEffect(() => {
		if (modalState.isShow) {
			window.addEventListener('keydown', handleUserKeyPress);
			window.addEventListener('mousedown', clickOutside);
		}
		return () => {
			window.removeEventListener('keydown', handleUserKeyPress);
			window.removeEventListener('mousedown', clickOutside);
		};
	}, [clickOutside, handleUserKeyPress, modalState]);

	const onAnimationEnd = () => {
		if (!modalState.isShow) {
			dispatch(modalActions.hideModal());
		}
	};
	const Component = MODAL_KEY_TO_COMPONENT_MAP[modalState.key];
	return createPortal(
		<div className={ className } ref={ modalRef } onAnimationEnd={ onAnimationEnd }>
			<div className="modal-clever-content" style={ { width: width } }>
				<Component { ...modalState.payload } />
			</div>
		</div>,
		document.body
	);
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
