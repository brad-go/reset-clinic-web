import { ComponentStory, ComponentMeta } from '@storybook/react';

import VideoPlayer from './VideoPlayer';

export default {
  title: 'components/VideoPlayer',
  component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = ({ ...args }) => {
  return <VideoPlayer {...args} />;
};

const url = 'https://www.youtube.com/watch?v=_CMepvb4c2o';

export const Mobile = Template.bind({});
Mobile.args = {
  url,
};
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};

export const Tablet = Template.bind({});
Tablet.args = {
  url,
};
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const Desktop = Template.bind({});
Desktop.args = {
  url,
};
