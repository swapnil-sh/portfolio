import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';


const Modal = ({closeModal}) => {

    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Hey there!</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <h4>Checkout my new Blog!</h4>
                    <p>How to solve maximum sum subarray question Kadanes Algorithm?</p>
                    <p>Have discussed all approaches with complete code in Java!</p>
                    <p>Watchout for my recent blogs and other initiatives as well.
                    </p>
                </div>
                <div className="lower-section">
                    <a onClick={closeModal} href={closeModal} className="modal-btn btn-red">Close</a>
                    <a href="www.github.com/swapnil-sh" target='_blank' rel='noreferrer' className="modal-btn btn-green">Check my Github</a>
                </div>
            </div>    
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;