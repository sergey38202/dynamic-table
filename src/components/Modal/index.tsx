import React, { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button';

import { IModalProps } from './types';
import "./styles.css";

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  const modalRoot = document.getElementById('modal-root') || document.body;
  const modalElement = useRef(document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(modalElement.current);

    return () => {
      modalRoot.removeChild(modalElement.current);
    };
  }, [modalRoot]);

  return isOpen
    ? createPortal(
        <div className="modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            <Button className="modal-close" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>,
        modalElement.current
      )
    : null;
};

export default Modal;
