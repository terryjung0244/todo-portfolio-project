import { fireEvent, render } from '@testing-library/react';
import { ModalPropsType } from '../Modal.interface';
import Modal from '../Modal';

const renderComponent = (props: ModalPropsType) => render(<Modal {...props} />);

describe('components/input', () => {
  const modalYesOnClick = jest.fn(); // 가상으로 해주는 onClick
  const modalNoOnClick = jest.fn(); // 가상으로 해주는 onClick

  let props: ModalPropsType;

  beforeEach(() => {
    props = {
      title: 'todo',
      onClickYesButton: modalYesOnClick,
      onClickNoButton: modalNoOnClick,
      dataTestId: 'modal',
      yesButtonText: 'confirm',
      noButtonText: 'noBtnText',
    };
  });

  // Render
  it('Render Modal component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('modal')).toBeInTheDocument();
  });

  // Test 'title text'
  it('Render Attribute title', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('modal-title')).toHaveTextContent('todo');
  });

  it('Render Yes button onClick', () => {
    const { getByTestId } = renderComponent(props);
    const button = getByTestId('modal-yes-button');
    fireEvent.click(button);
    expect(modalYesOnClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveTextContent('confirm');
  });

  it('Render No button onClick', () => {
    const { getByTestId } = renderComponent(props);
    fireEvent.click(getByTestId('modal-no-button'));
    expect(modalNoOnClick).toHaveBeenCalledTimes(1);
    expect(getByTestId('modal-no-button')).toHaveTextContent('noBtnText');
  });
});
