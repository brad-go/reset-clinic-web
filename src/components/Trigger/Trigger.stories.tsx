import { ComponentStory, ComponentMeta } from '@storybook/react';

import Trigger from './Trigger';

export default {
  title: 'components/Trigger',
  component: Trigger,
} as ComponentMeta<typeof Trigger>;

const Template: ComponentStory<typeof Trigger> = ({ ...args }) => {
  return <Trigger {...args} />;
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};

export const MobileWithLetter = Template.bind({});
MobileWithLetter.args = {
  children: 'PRESS',
};
MobileWithLetter.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const TabletWithLetter = Template.bind({});
TabletWithLetter.args = {
  children: 'PRESS',
};
TabletWithLetter.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const Desktop = Template.bind({});

export const DesktopWithLetter = Template.bind({});
DesktopWithLetter.args = {
  children: 'PRESS',
};
