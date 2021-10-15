import React from 'react';
import "./style.scss";

const Modal = (props) => {
    return(
        <>
            <div className="modalwrap">
                <div class="modal_container">
                    <div className="modal_titlebar">
                        <div className="title">{props.title}</div>
                        <div className="xbutton" onClick={() => props.onClick()}>x</div>
                    </div>
                    <div className="modal_content">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;