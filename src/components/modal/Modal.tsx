// import React, { useEffect, useRef } from 'react';
import { ModalPropsType } from 'components/modal/Modal.interface';
import * as Styled from 'components/modal/Modal.Styled';
import { useEffect, useRef } from 'react';

const Modal = ({
  width = '40%',
  title,
  children,
  yesButtonText = '',
  noButtonText = '',
  onClickYesButton = () => null,
  onClickNoButton = () => null,
  dataTestId,
}: ModalPropsType) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (modalRef.current as HTMLDivElement).focus();
  }, []);

  return (
    <Styled.Modal width={width} data-testid={dataTestId}>
      <div
        className="modal-content"
        ref={modalRef}
        tabIndex={-1}
        onBlur={(e: React.FocusEvent<HTMLDivElement>) => {
          if (!e.relatedTarget) onClickNoButton();
        }}
      >
        <div className="modal-title" data-testid="modal-title">
          {title}
        </div>
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
