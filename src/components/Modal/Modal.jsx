import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';


const Modal = ({closeModal}) => {

    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Huge Announcement!!</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <h4>Data Structures and Algorthms ould be live soon!</h4>
                    <p>Do you wish to master DS and algo for your interview preparation!!?</p>
                    <p>It would be completely FREE of cost!</p>
                    <p>Watchout for my blogs and other initiatives as well.
                    </p>
                </div>
                <div className="lower-section">
                    <a onClick={closeModal} className="modal-btn btn-red">Close</a>
                    <a href="www.github.com/swapnil-sh" target='_blank' rel='noreferrer' className="modal-btn btn-green">Check my Github</a>
                </div>
            </div>    
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;