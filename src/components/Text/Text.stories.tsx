import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { fontSizes, FontSize, Color } from '@/styles/theme';

import Text, { TextElement, TextAlign, FontWeight } from './Text';

export default {
  title: 'components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const CustomElements: ComponentStory<typeof Text> = ({ ...args }) => {
  const textElements: TextElement[] = [
    'p',
    'b',
    'i',
    'u',
    's',
    'em',
    'small',
    'strong',
    'del',
    'ins',
    'cite',
    'mark',
    'sub',
    'sup',
    'span',
  ];

  return (
    <>
      {textElements.map((element) => (
        <React.Fragment key={element}>
          <Text as={element} {...args}>
            Text element <b>{element}</b>
          </Text>
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export const CustomAligns: ComponentStory<typeof Text> = ({ ...args }) => {
  const aligns: TextAlign[] = [
    'start',
    'end',
    'left',
    'right',
    'center',
    'justify',
  ];

  return (
    <>
      {aligns.map((align) => (
        <Text key={align} align={align} {...args}>
          Text align <b>{align}</b>
        </Text>
      ))}
    </>
  );
};

export const CustomSizes: ComponentStory<typeof Text> = ({ ...args }) => {
  const sizes = Object.keys(fontSizes) as (keyof FontSize)[];

  return (
    <>
      {sizes.map((size) => (
        <Text key={size} size={size} {...args}>
          Text size <b>{size}</b>
        </Text>
      ))}
    </>
  );
};

export const CustomFontWeights: ComponentStory<typeof Text> = ({ ...args }) => {
  const fontWeights: FontWeight[] = [
    'lighter',
    'normal',
    'bold',
    'bolder',
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
  ];

  return (
    <>
      {fontWeights.map((fontWeight) => (
        <Text key={fontWeight} weight={fontWeight} {...args}>
          Text font weight <b>{fontWeight}</b>
        </Text>
      ))}
    </>
  );
};

export const CustomColors: ComponentStory<typeof Text> = ({ ...args }) => {
  const colors: (keyof Color)[] = ['primary', 'red', 'white', 'gray', 'black'];

  return (
    <>
      {colors.map((color) => (
        <Text key={color} color={color} {...args}>
          Text color {color}
        </Text>
      ))}
    </>
  );
};
