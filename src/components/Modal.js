import React from 'react';

const Modal = ({ children, titleModal }) => {
    return (
        <div className="modal fade" id="modal" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{titleModal}</h5>
                        <button type="button" className="close btn text-danger" data-dismiss="modal">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;