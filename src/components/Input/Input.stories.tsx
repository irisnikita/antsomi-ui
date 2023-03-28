/* eslint-disable no-console */
// Libraries
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Input } from './Input';
import {
  Space,
} from '../index';

// Types
import Icon from '@antscorp/icons';

// Variables
const exampleIcon = <Icon type="icon-ants-search-2" />;

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    addonAfter: {
      name: 'addonAfter',
      defaultValue: undefined,
      description: 'The label text displayed after (on the right side of) the input field',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    addonBefore: {
      name: 'addonBefore',
      defaultValue: undefined,
      description: 'The label text displayed before (on the left side of) the input field',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    allowClear: {
      name: 'allowClear',
      defaultValue: false,
      description: 'If allow to remove input content with clear icon',
      table: {
        type: { summary: 'boolean | { clearIcon: ReactNode }' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultValue: {
      name: 'defaultValue',
      defaultValue: undefined,
      description: 'The initial input content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Whether the input is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    id: {
      name: 'id',
      defaultValue: undefined,
      description: 'The ID for input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    maxLength: {
      name: 'maxLength',
      defaultValue: undefined,
      description: 'The max length',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'number',
      },
    },
    showCount: {
      name: 'showCount',
      defaultValue: false,
      description: 'Whether show text count',
      table: {
        type: { summary: 'boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    status: {
      name: 'status',
      defaultValue: undefined,
      description: 'Set validation status',
      table: {
        type: { summary: 'error | warning' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'select',
        labels: {
          error: 'Error',
          warning: 'Warning',
        },
      },
      options: ['error', 'warning'],
    },
    prefix: {
      name: 'prefix',
      defaultValue: undefined,
      description: 'The prefix icon for the Input',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: undefined,
      },
    },
    size: {
      name: 'size',
      defaultValue: undefined,
      description: 'The size of the input box. Note: in the context of a form, the `middle` size is used',
      table: {
        type: { summary: 'large | middle | small' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'select',
        labels: {
          large: 'Large',
          middle: 'Middle',
          small: 'Small',
        },
      },
      options: ['large', 'middle', 'small'],
    },
    suffix: {
      name: 'suffix',
      defaultValue: undefined,
      description: 'The suffix icon for the Input',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    value: {
      name: 'value',
      defaultValue: '',
      description: 'The input content value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    onChange: {
      name: 'onChange',
      defaultValue: undefined,
      description: 'Callback when user input',
      table: {
        type: { summary: 'function(e)' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
    onPressEnter: {
      name: 'onPressEnter',
      defaultValue: undefined,
      description: 'The callback function that is triggered when Enter key is pressed',
      table: {
        type: { summary: 'function(e)' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'To trigger an operation.',
      },
    },
  },
} as ComponentMeta<typeof Input>;

// Variables

// Default
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {

};

export const BasicUsage: ComponentStory<any> = () => (
  <Input placeholder="Basic usage" />
);

BasicUsage.parameters = {
  docs: {
    description: {
      story: 'Basic usage example.',
    },
  },
};

export const TextArea: ComponentStory<any> = () => (
  <>
    <Input.TextArea rows={4} />
    <br />
    <br />
    <Input.TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
  </>
);

TextArea.parameters = {
  docs: {
    description: {
      story: 'For multi-line input.',
    },
  },
};

export const Status: ComponentStory<any> = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input status="error" prefix={exampleIcon} placeholder="Error with prefix" />
    <Input status="warning" prefix={exampleIcon} placeholder="Warning with prefix" />
  </Space>
);

Status.parameters = {
  docs: {
    description: {
      story: 'Add status to Input with status, which could be error or warning.',
    },
  },
};

export const BorderLess: ComponentStory<any> = () => <Input placeholder="Borderless" bordered={false} />;

BorderLess.parameters = {
  docs: {
    description: {
      story: 'No border.',
    },
  },
};
