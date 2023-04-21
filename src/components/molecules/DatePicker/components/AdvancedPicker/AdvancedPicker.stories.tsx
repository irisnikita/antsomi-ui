/* eslint-disable no-console */
// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { AdvancedPicker } from './AdvancedPicker';

export default {
  title: 'Molecules/DatePicker/AdvancedPicker',
  component: AdvancedPicker,
  argTypes: {
    label: {
      name: 'label',
      defaultValue: undefined,
      description: 'Show label for AdvancedPicker input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'To select a dynamic date.',
      },
    },
  },
} as ComponentMeta<typeof AdvancedPicker>;

// Default
const Template: ComponentStory<typeof AdvancedPicker> = args => <AdvancedPicker {...args} />;

export const Default = Template.bind({});

Default.args = {};
