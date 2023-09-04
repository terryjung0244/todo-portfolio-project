import { render } from '@testing-library/react';
import Button from '../Button';
import { ButtonPropsType } from '../Button.interface';

const renderComponent = (props: ButtonPropsType) => {
  return render(<Button {...props} />);
};

// props값이 달라질때도 있기때문에, 위에같이 테스팅할 props를 받는다.

describe('common/reusable/button', () => {
  let props: ButtonPropsType;

  beforeEach(() => {
    props = {
      text: 'button',
      onClick: () => null,
      dataTestId: 'test-button',
    };
  });
  // 값을 유지하기위해서 beforeEach를 사용한다.

  it('Render reusable button', () => {
    const { getByTestId } = renderComponent(props);
    expect(getByTestId('test-button')).toBeInTheDocument();
  });

  it('Test for width and height' () => {
    const { getByTestId } = renderComponent(props);
    
  })

  it('Test text', () => {
    const { getByTestId } = render(<Button {...props} />);
    expect(getByTestId('test-button')).toHaveTextContent('button');
  });
});
