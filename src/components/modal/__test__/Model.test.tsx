import { fireEvent, render } from '@testing-library/react';
import { ModalPropsType } from '../Modal.interface';
import Modal from '../Modal';

const renderComponent = (props: ModalPropsType) => render(<Modal {...props} />);

describe('components/input', () => {
  const modalOnClick = jest.fn(); // 가상으로 해주는 onClick
  let props: ModalPropsType;

  beforeEach(() => {
    props = {
      title: 'todo',
      onClickYesButton: modalOnClick,
      // onClickNoButton: modalOnClick,
      dataTestId: 'modal',
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
    expect(getByTestId('modal')).toHaveTextContent('todo');
  });

  it('Render onClick', () => {
    const { getByTestId } = renderComponent(props);
    const button = getByTestId('modal');
    fireEvent.click(button);
    expect(modalOnClick).toHaveBeenCalledTimes(1);
  });
});
