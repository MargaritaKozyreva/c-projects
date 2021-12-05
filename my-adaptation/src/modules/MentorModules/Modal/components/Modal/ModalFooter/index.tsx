import React from 'react';
import './footer.scss';

const ModalFooter = (props: any) => {
	const { children } = props;
	return <div className="modal-footer">{ children }</div>;
};

export default ModalFooter;
