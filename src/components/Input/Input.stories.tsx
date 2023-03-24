import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ ...args }) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = {
  value: '닉네임',
};
