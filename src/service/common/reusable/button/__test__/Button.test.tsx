import { render } from '@testing-library/react';
import Button from '../Button';
import { ButtonPropsType } from '../Button.interface';

describe('common/reusable/button', () => {
  const props: ButtonPropsType = {
    text: 'button',
    onClick: () => null,
    dataTestId: 'test-button',
  };

  it('Render resusable button', () => {
    const { getByTestId } = render(<Button {...props} />);
    expect(getByTestId('test-button')).toBeInTheDocument();
  });
});
