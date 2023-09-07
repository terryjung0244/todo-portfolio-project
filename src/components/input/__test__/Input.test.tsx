import { render } from '@testing-library/react';
import { InputPropsType } from '../Input.interface';
import Input from '../Input';

const renderComponent = (props: InputPropsType) => render(<Input {...props} />);

describe('components/input', () => {
  let props: InputPropsType;

  beforeEach(() => {
    props = {
      name: 'todo',
      value: 'abc',
      placeholder: 'enter todo',
      onChange: () => null,
      dataTestId: 'input',
    };
  });

  it('Render input component', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('input')).toBeInTheDocument();
  });
});
