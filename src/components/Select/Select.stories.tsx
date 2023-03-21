import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SMOKING_OPTIONS } from '@/constants';

import Select from './Select';

export default {
  title: 'components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({ ...args }) => {
  return <Select {...args} />;
};

export const Mobile = Template.bind({});
Mobile.args = {
  options: SMOKING_OPTIONS,
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};

export const MobileSelected = Template.bind({});
MobileSelected.args = {
  options: SMOKING_OPTIONS,
  selected: SMOKING_OPTIONS[0].id,
};
MobileSelected.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};

export const Tablet = Template.bind({});
Tablet.args = {
  options: SMOKING_OPTIONS,
};
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const TabletSelected = Template.bind({});
TabletSelected.args = {
  options: SMOKING_OPTIONS,
  selected: SMOKING_OPTIONS[0].id,
};
TabletSelected.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const Desktop = Template.bind({});
Desktop.args = {
  options: SMOKING_OPTIONS,
};

export const DesktopSelected = Template.bind({});
DesktopSelected.args = {
  options: SMOKING_OPTIONS,
  selected: SMOKING_OPTIONS[0].id,
};
