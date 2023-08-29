import styled from 'styled-components';
import { ModalPropsType } from 'service/common/reusable/modal/Modal.interface';

export const Modal = styled.div<Partial<ModalPropsType>>`
  position: fixed;
  z-index: 6; // Header z-index (5)
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    background-color: #fff;
    padding: 30px;
    width: ${(props) => props.width};

    .modal-title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .modal-button-container {
      display: flex;
      justify-content: space-between;
    }
  }
`;
