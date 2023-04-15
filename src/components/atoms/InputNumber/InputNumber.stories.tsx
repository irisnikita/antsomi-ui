/* eslint-disable no-console */
// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { InputNumber } from './InputNumber';
import { Space } from 'src/components/atoms/Space';

// Types
import Icon from '@antscorp/icons';

// Variables
const exampleIcon = <Icon type="icon-ants-search-2" />;

export default {
  title: 'Atoms/InputNumber',
  component: InputNumber,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: 'To trigger an operation.',
      },
    },
  },
} as ComponentMeta<typeof InputNumber>;

// Variables

// Default
const Template: ComponentStory<typeof InputNumber> = args => <InputNumber {...args} />;

export const Default = Template.bind({});

Default.args = {};
