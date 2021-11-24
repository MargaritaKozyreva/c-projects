import React, { useRef, useEffect, useState, useCallback } from 'react';
import ModalHeader from '../components/Modal/ModalHeader';
import ModalBody from '../components/Modal/ModalBody';
import ModalFooter from '../components/Modal/ModalFooter';
import { createPortal } from 'react-dom';
import './styles.scss';

interface Props {
	show: boolean;
	children: React.ReactNode;
	onHide: any;
	closeOutside: boolean;
	width: string | number;
	escapeKey: boolean;
}

const Modal: React.FC<Props> & any = ({
	show,
	children,
	onHide,
	closeOutside = true,
	width = '100%',
	escapeKey = true
}): JSX.Element | false => {
	const [render, setRender] = useState(show);
	const modalRef = useRef();
	const className = show ? 'modal-clever show' : 'modal-clever hide';

	useEffect(() => {
		if (show) {
			setRender(true);
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [show]);

	const handleUserKeyPress = useCallback(
		(e) => {
			if (e.code === 'Escape' && escapeKey && onHide) {
				onHide(false);
			}
		},
		[onHide]
	);

	const clickOutside = useCallback(
		(e) => {
			if (closeOutside && e.target === modalRef.current && onHide) {
				onHide(false);
			}
		},
		[onHide]
	);

	useEffect(() => {
		if (show) {
			window.addEventListener('keydown', handleUserKeyPress);
			window.addEventListener('mousedown', clickOutside);
		}
		return () => {
			window.removeEventListener('keydown', handleUserKeyPress);
			window.removeEventListener('mousedown', clickOutside);
		};
	}, [clickOutside, handleUserKeyPress, show]);

	const onAnimationEnd = () => {
		if (!show) {
			setRender(false);
		}
	};

	return (
		render &&
		createPortal(
			<div className={ className } ref={ modalRef } onAnimationEnd={ onAnimationEnd }>
				<div className="modal-clever-content" style={ { width: width } }>
					{ children }
				</div>
			</div>,
			document.body
		)
	);
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
