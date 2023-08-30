/* eslint-disable no-console */
// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Switch } from './index';
import { Icon } from '../Icon';
import { Button } from '../Button';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      name: 'size',
      defaultValue: 'default',
      description: 'The size of the Switch, options: default small',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'text',
      },
    },
    autoFocus: {
      name: 'autoFocus',
      defaultValue: false,
      description: 'Whether get focus when component mounted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    checked: {
      name: 'checked',
      defaultValue: false,
      description: 'Determine whether the Switch is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    checkedChildren: {
      name: 'checkedChildren',
      defaultValue: undefined,
      description: 'The content to be shown when the state is checked',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
    },
    className: {
      name: 'className',
      defaultValue: undefined,
      description: 'The additional class to Switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultChecked: {
      name: 'defaultChecked',
      defaultValue: false,
      description: 'Whether to set the initial state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'disabled',
      defaultValue: false,
      description: 'Disable switch',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    loading: {
      name: 'loading',
      defaultValue: false,
      description: '	Loading state of switch',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    unCheckedChildren: {
      name: 'unCheckedChildren',
      defaultValue: undefined,
      description: 'The content to be shown when the state is unchecked',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
    },
    onChange: {
      name: 'onChange',
      defaultValue: undefined,
      description: 'Trigger when the checked state is changing',
      table: {
        type: { summary: 'function(checked: boolean, event: Event)' },
        defaultValue: { summary: '-' },
      },
    },
    onClick: {
      name: 'onClick',
      defaultValue: undefined,
      description: 'Trigger when clicked',
      table: {
        type: { summary: 'function(checked: boolean, event: Event)' },
        defaultValue: { summary: '-' },
      },
    },
    title: {
      name: 'title',
      defaultValue: undefined,
      description: 'title of switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    id: {
      name: 'id',
      defaultValue: undefined,
      description: 'id of switch',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    tabIndex: {
      name: 'tabIndex',
      defaultValue: undefined,
      description: 'tabIndex of switch',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'number',
      },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      component:
        'Switching Selector.\n # When To Use\n- If you need to represent the switching between two states or on-off state.\n- The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation.',
    },
  },
};

// Basic
export const Basic: ComponentStory<typeof Switch> = args => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return <Switch defaultChecked onChange={onChange} />;
};

Basic.parameters = {
  docs: {
    description: {
      story: 'The most basic usage.\n ##### Example',
    },
  },
};

// Text and icons
export const TextIcons: ComponentStory<typeof Switch> = args => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <>
      <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
      <br />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <br />
      <Switch
        checkedChildren={<Icon type="icon-ants-caret-right" />}
        unCheckedChildren={<Icon type="icon-ants-caret-left" />}
        defaultChecked
      />
    </>
  );
};

Basic.parameters = {
  docs: {
    description: {
      story: 'With text and icon.\n ##### Example',
    },
  },
};

// disabled
export const Disabled: ComponentStory<typeof Switch> = args => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </>
  );
};

Basic.parameters = {
  docs: {
    description: {
      story: 'Disabled state of Switch.\n ##### Example',
    },
  },
};

// two sizes
export const TwoSizes: ComponentStory<typeof Switch> = args => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);

TwoSizes.parameters = {
  docs: {
    description: {
      story: 'size="small" represents a small sized switch.\n ##### Example',
    },
  },
};

// loading
export const Loading: ComponentStory<typeof Switch> = args => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);

Loading.parameters = {
  docs: {
    description: {
      story: 'Mark a pending state of switch.\n ##### Example',
    },
  },
};
