import { ComponentStory, ComponentMeta } from '@storybook/react';

import Survey from './Survey';

export default {
  title: 'components/Survey',
  component: Survey,
} as ComponentMeta<typeof Survey>;

const Template: ComponentStory<typeof Survey> = () => {
  return <Survey />;
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
