import { render, fireEvent } from '@testing-library/react';
import { InputPropsType } from '../Input.interface';
import Input from '../Input';

const renderComponent = (props: InputPropsType) => render(<Input {...props} />);

describe('components/input', () => {
  const inputOnChange = jest.fn();
  let props: InputPropsType;

  beforeEach(() => {
    props = {
      name: 'todo',
      value: 'abc',
      placeholder: 'enter todo',
      onChange: inputOnChange,
      dataTestId: 'input',
    };
  });

  // Render
  it('Render input component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('input')).toBeInTheDocument();
  });

  // Attribute render name / value
  it('Render Attribute name and value', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('input')).toHaveAttribute('value', 'abc');
  });

  it('Render onChange Event', () => {
    const { getByTestId } = renderComponent(props);
    const input = getByTestId('input');
    // dateTestId: 'input'을 가져와서 input variable에 store한다.

    fireEvent.change(input, {
      target: {
        value: 'hello',
        name: 'abc',
      },
    });
    expect(inputOnChange).toHaveBeenCalledTimes(1);
    // onChange가 발생했을때, 몇번 called했는가...
  });
});
