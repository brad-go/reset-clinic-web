import { ComponentStory, ComponentMeta } from '@storybook/react';

import ShareLink from './ShareLink';

export default {
  title: 'components/ShareLink',
  component: ShareLink,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ShareLink>;

const Template: ComponentStory<typeof ShareLink> = ({ ...args }) => {
  return <ShareLink {...args} />;
};

export const Mobile = Template.bind({});
Mobile.args = {
  isOpen: true,
  onClose: () => {},
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};

export const Tablet = Template.bind({});
Tablet.args = {
  isOpen: true,
  onClose: () => {},
};
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const Desktop = Template.bind({});
Desktop.args = {
  isOpen: true,
  onClose: () => {},
};
