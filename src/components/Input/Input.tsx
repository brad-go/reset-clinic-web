import { ComponentPropsWithoutRef, forwardRef } from 'react';
import * as S from './Input.styles';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  id?: string;
  value: string;
  status?: 'default' | 'error';
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, value, status = 'default', onChange, ...rest }, ref) => {
    return (
      <S.Container>
        <S.Input
          ref={ref}
          id={id}
          type="text"
          value={value}
          status={status}
          required
          placeholder="닉네임을 입력해주세요."
          onChange={onChange}
          {...rest}
        />
        {status === 'error' && (
          <S.StatusMessage status={status}>
            이미 존재하는 닉네임입니다.
          </S.StatusMessage>
        )}
      </S.Container>
    );
  }
);

Input.displayName = 'Input';

export default Input;
