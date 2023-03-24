import { ComponentPropsWithoutRef, forwardRef } from 'react';
import * as S from './Input.styles';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  id?: string;
  value: string;
  isError?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, value, placeholder, isError, onChange, ...rest }, ref) => {
    return (
      <S.Container>
        <S.Input
          ref={ref}
          id={id}
          type="text"
          value={value}
          required
          placeholder={placeholder}
          isError={isError}
          onChange={onChange}
          {...rest}
        />
      </S.Container>
    );
  }
);

Input.displayName = 'Input';

export default Input;
