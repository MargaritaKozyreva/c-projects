import React, { useRef, useEffect, useState, useCallback } from 'react';
import ModalHeader from '../components/Modal/ModalHeader';
import ModalBody from '../components/Modal/ModalBody';
import ModalFooter from '../components/Modal/ModalFooter';
import { createPortal } from 'react-dom';
import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions, ModalState } from '../redux/ModalSlices';
interface Props {
	children?: React.ReactNode;
	onHide?: any;
	closeOutside?: boolean;
	width?: string | number;
	escapeKey?: boolean;
}

const Modal = (props: Props) => {
	const {
		children,
		onHide,
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

	console.log(modalState);

	useEffect(() => {
		if (modalState.isShow) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [dispatch]);

	const handleUserKeyPress = useCallback(
		(e) => {
			if (e.code === 'Escape' && escapeKey && onHide) {
				dispatch(modalActions.hideModal());
			}
		},
		[dispatch]
	);

	const clickOutside = useCallback(
		(e) => {
			if (closeOutside && e.target === modalRef.current && onHide) {
				dispatch(modalActions.hideModal());
			}
		},
		[dispatch]
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
	}, [clickOutside, handleUserKeyPress, modalState.isShow]);

	const onAnimationEnd = () => {
		if (!modalState.isShow) {
			dispatch(modalActions.hideModal());
		}
	};

	return createPortal(
		<div className={ className } ref={ modalRef } onAnimationEnd={ onAnimationEnd }>
			<div className="modal-clever-content" style={ { width: width } }>
				{ modalState.content }
			</div>
		</div>,
		document.body
	);
};

// Modal.Header = ModalHeader;
// Modal.Body = ModalBody;
// Modal.Footer = ModalFooter;

export default Modal;
