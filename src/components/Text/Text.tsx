import { PropsWithChildren } from 'react';

import { Color, FontSize } from '@/styles/theme';

import * as S from './Text.styles';

export type TextElement =
  | 'p'
  | 'b'
  | 'i'
  | 'u'
  | 's'
  | 'em'
  | 'strong'
  | 'small'
  | 'cite'
  | 'mark'
  | 'del'
  | 'ins'
  | 'sub'
  | 'sup'
  | 'span';

export type TextAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify';

export type FontWeight =
  | 'lighter'
  | 'normal'
  | 'bold'
  | 'bolder'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export interface TextProps extends PropsWithChildren {
  id?: string;
  as?: TextElement;
  size?: keyof FontSize;
  weight?: FontWeight;
  color?: keyof Color;
  align?: TextAlign;
}

const Text = ({ as = 'p', align = 'start', children, ...rest }: TextProps) => {
  return (
    <S.Text as={as} align={align} {...rest}>
      {children}
    </S.Text>
  );
};

export default Text;
