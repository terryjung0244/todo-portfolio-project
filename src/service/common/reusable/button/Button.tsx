import React from 'react';
import * as Styled from './Button.Styled';
import { ButtonPropsType } from './Button.interface';

const Button = ({ text, onClick }: ButtonPropsType) => {
  return <Styled.Button onClick={onClick}>{text}</Styled.Button>;
};

export default Button;
