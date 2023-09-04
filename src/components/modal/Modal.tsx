// import React, { useEffect, useRef } from 'react';
import { ModalPropsType } from 'components/modal/Modal.interface';
import * as Styled from 'components/modal/Modal.Styled';

const Modal = ({
  width = '40%',
  title,
  children,
  yesButtonText = '',
  noButtonText = '',
  onClickYesButton = () => null,
  onClickNoButton = () => null,
}: ModalPropsType) => {
  return (
    <Styled.Modal width={width}>
      <div className="modal-content">
        <div className="modal-title">{title}</div>
        {children}
        <div className="modal-button-container">
          {yesButtonText && (
            <div data-testid="modal-yes-button" onClick={onClickYesButton}>
              {yesButtonText}
            </div>
          )}
          {noButtonText && (
            <div data-testid="modal-no-button" onClick={onClickNoButton}>
              {noButtonText}
            </div>
          )}
        </div>
      </div>
    </Styled.Modal>
  );
};

export default Modal;