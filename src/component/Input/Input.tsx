import React, {
 forwardRef,
 type InputHTMLAttributes,
 type ReactNode,
} from 'react';
import * as S from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
 leftIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
 ({ leftIcon, placeholder, onChange, ...props }, ref) => {
  return (
   <div css={S.inputWrapperStyle}>
    {leftIcon}
    <input
     ref={ref}
     css={S.inputStyle}
     placeholder={placeholder}
     onChange={onChange}
     {...props}
    />
   </div>
  );
 },
);

export default Input;
