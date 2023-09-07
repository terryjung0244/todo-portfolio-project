import { fireEvent, render } from '@testing-library/react';
import Button from '../Button';
import { ButtonPropsType } from '../Button.interface';

const renderComponent = (props: ButtonPropsType) =>
  render(<Button {...props} />);

describe('common/reusable/button', () => {
  const buttonClicked = jest.fn();

  let props: ButtonPropsType;

  beforeEach(() => {
    props = {
      text: 'button',
      onClick: buttonClicked,
      dataTestId: 'test-button',
    };
  });

  it('Render reusable button', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-button')).toBeInTheDocument();
  });

  it('Test for width and height', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-button')).toHaveAttribute(
      'style',
      'width: 100px; height: 50px;',
    );
  });

  it('Test text', () => {
    const { getByTestId } = render(<Button {...props} />);
    expect(getByTestId('test-button')).toHaveTextContent('button');
  });

  it('Simulate a button operational', () => {
    const { getByTestId } = render(<Button {...props} />);
    fireEvent.click(getByTestId('test-button'));
    expect(buttonClicked).toHaveBeenCalledTimes(1);
    // fireEvent.click(getByTestId('test-button'));
  });
});
