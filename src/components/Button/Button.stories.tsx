import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>;
};

export const OutlineButton = Template.bind({});
OutlineButton.args = {
  children: '저장',
};

export const ClickedOutlineButton = Template.bind({});
ClickedOutlineButton.args = {
  children: '저장',
  clicked: true,
};

export const FillButton = Template.bind({});
FillButton.args = {
  children: '저장',
  variant: 'fill',
};

export const ClickedFillButton = Template.bind({});
ClickedFillButton.args = {
  children: '저장',
  variant: 'fill',
  clicked: true,
};

export const LinkButton = Template.bind({});
LinkButton.args = {
  children: '설문조사 하러 가기',
  as: 'a',
  href: 'https://www.google.com',
};

export const FullWidthButton = Template.bind({});
FullWidthButton.args = {
  children: '비흡연자에요',
  fullWidth: true,
};
