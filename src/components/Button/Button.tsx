import { ElementType, forwardRef, Ref, MouseEventHandler } from 'react';

import type { OverridableProps } from '@/types';

import * as S from './Button.styles';

export type ButtonVariant = 'fill' | 'outline';

export type ButtonType = 'button' | 'submit';

export interface ButtonStyle {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  clicked?: boolean;
}

export interface ButtonBaseProps extends ButtonStyle {
  type?: ButtonType;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type ButtonProps<T extends ElementType> = OverridableProps<
  T,
  ButtonBaseProps
>;

const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: Ref<any>) => {
    const {
      as = 'button',
      type = 'button',
      variant = 'outline',
      children,
      onClick,
      ...rest
    } = props;

    return (
      <S.Button
        ref={ref}
        as={as}
        type={type}
        variant={variant}
        onClick={onClick}
        {...rest}
      >
        {children}
      </S.Button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
