import { ComponentStory, ComponentMeta } from '@storybook/react';

import Gallery from './Gallery';

export default {
  title: 'components/Gallery',
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = ({ ...args }) => {
  return <Gallery {...args} />;
};

export const Mobile = Template.bind({});
Mobile.parameters = {
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

export const Desktop = Template.bind({});
