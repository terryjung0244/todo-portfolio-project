// import { render } from '@testing-library/react';
// import Button from '../Button';
// import { ButtonPropsType } from '../Button.interface';

// const renderComponent = (props: ButtonPropsType) => {
//   render(<Button {...props} />);
// };

// describe('common/reusable/button', () => {
//   let props: ButtonPropsType;

//   beforeEach(() => {
//     props = {
//       text: 'button',
//       onClick: () => null,
//       dataTestId: 'test-button',
//     };
//   });

//   it('Render reusable button', () => {
//     const { getByTestId } = render(<Button {...props} />);
//     expect(getByTestId('test-button')).toBeInTheDocument();
//   });

//   it('Test text', () => {
//     const { getByTestId } = renderComponent(props);
//     expect(getByTestId('test-button')).toHaveTextContent('button');
//   });
// });
export {};
