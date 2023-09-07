import React from 'react';
import * as Styled from './Button.Styled';
import { ButtonPropsType } from './Button.interface';

const Button = ({
  className,
  text,
  onClick,
  dataTestId,
  width = '100px',
  height = '50px',
}: ButtonPropsType) => {
  return (
    <Styled.Button
      style={{ width, height }}
      className={className}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {text}
    </Styled.Button>
  );
};

export default Button;
