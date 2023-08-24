import React from 'react';
import * as Styled from './Input.Styled';
import { InputPropsType } from './Input.interface';

const Input = ({ name, value, placeholder, onChange }: InputPropsType) => {
  return (
    <Styled.Input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
