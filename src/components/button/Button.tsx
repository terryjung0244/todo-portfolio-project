import React from 'react';
import * as Styled from './Button.Styled';
import { ButtonPropsType } from './Button.interface';

const Button = ({ className, text, onClick, dataTestId }: ButtonPropsType) => {
  return (
    <Styled.Button
      className={className}
      onClick={onClick}
      data-TestId={dataTestId}
    >
      {text}
    </Styled.Button>
  );
};

export default Button;
