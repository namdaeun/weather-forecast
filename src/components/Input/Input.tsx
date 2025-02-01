import React, { type HTMLAttributes, type ReactNode } from 'react';
import * as S from './Input.style';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
 leftIcon?: ReactNode;
 placeholder?: string;
}

const Input = ({ leftIcon, placeholder, onChange, ...props }: InputProps) => {
 return (
  <div css={S.inputWrapperStyle}>
   {leftIcon}
   <input
    css={S.inputStyle}
    placeholder={placeholder}
    onChange={onChange}
    {...props}
   />
  </div>
 );
};

export default Input;
