import React from 'react';

const Modal = ({ closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content d-flex align-items-center justify-content-center">
                <div className="card mt-5 p-3 custom-modal">
                    <div className="modal-header">

                        <h3>Ajuda</h3>


                        <button type="button" className="close" onClick={closeModal}>
                        </button>


                    </div>


                    <div className="modal-body" >

                        <h5>Dúvida 1 - Exemplo</h5>
                        <p>
                            <a href="#" className="tooltip-test" title="Tooltip">
                                Clique aqui para saber mais
                            </a>
                        </p>

                        <h5>Dúvida 2 - Exemplo</h5>
                        <p>
                            <a href="#" className="tooltip-test" title="Tooltip">
                                Clique aqui para saber mais
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
