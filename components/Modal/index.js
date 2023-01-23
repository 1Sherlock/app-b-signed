import React from 'react';
const Modal = ({isOpen, toggle, children, lg, style, xl}) => {
    return (
        <>
            <div className={`modal ${isOpen ? "active" : ""} ${lg ? "modalLg" : ""} ${xl ? "modalXXl": ""}`} >
                <div className="modalContent" style={style}>
                    {children}
                </div>
            </div>
            <div className={`modalBackdrop ${isOpen ? "active" : ""}`} onClick={toggle}/>
        </>
    );
};

export default Modal;