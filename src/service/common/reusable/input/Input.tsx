import React from 'react';
import * as Styled from './Input.Styled';
import { InputPropsType } from './Input.interface';

const Input = ({
  name,
  value,
  placeholder,
  onChange,
  className,
}: InputPropsType) => {
  return (
    <Styled.Input
      className={className}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
