// Libraries
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { Spin } from './index';
import { Alert } from '../Alert';
import {
  BorderHorizontalOutlined,
  SyncOutlined,
  RadarChartOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { Switch } from '../Switch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Spin',
  component: Spin,
  argTypes: {
    indicator: {
      name: 'indicator',
      description: 'React node of the spinning indicator',
      table: { type: { summary: 'React.ReactNode' } },
      control: {
        type: 'select',
        options: {
          SyncOutlined: <SyncOutlined spin />,
          BorderHorizontalOutlined: <BorderHorizontalOutlined spin />,
          RadarChartOutlined: <RadarChartOutlined spin />,
        },
      },
    },
    indicatorSize: {
      name: 'indicatorSize',
      description: 'Set size for indicator',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 30 },
      },
      defaultValue: 30,
      control: {
        type: 'number',
      },
    },
    delay: {
      name: 'delay',
      description: 'Specifies a delay in milliseconds for loading state (prevent flush)',
      table: {
        type: { summary: 'number (milliseconds)' },
      },
      control: { type: 'number' },
    },
    spinning: {
      name: 'spinning',
      description: 'Whether Spin is visible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      defaultValue: true,
      control: { type: 'boolean' },
    },
    children: {
      type: 'children',
      description: 'Children of Spin',
      table: {
        type: { summary: 'any' },
      },
      control: {
        type: 'select',
        options: {
          ReactNodeButton: (
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          ),
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A spinner for displaying loading state of a page or a section.' +
          '\n### When To Use' +
          '\n' +
          "When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude." +
          '\n',
      },
    },
  },
} as unknown as ComponentMeta<typeof Spin>;

const Template: ComponentStory<typeof Spin> = args => <Spin {...args}>{args.children}</Spin>;
export const Default = Template.bind({});

export const InsideContainer = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Spin />
  </div>
);

InsideContainer.storyName = 'Inside a container';
InsideContainer.parameters = {
  docs: {
    description: {
      story: 'Spin in a container.',
    },
  },
};

export const CustomIndicator = () => {
  const indicators = [
    <LoadingOutlined spin />,
    <BorderHorizontalOutlined spin />,
    <SyncOutlined spin />,
    <RadarChartOutlined spin />,
  ];
  return (
    <div>
      {indicators.map(indicator => (
        <span style={{ display: 'inline-block', marginLeft: 12, marginRight: 12 }}>
          <Spin indicator={indicator} />
        </span>
      ))}
    </div>
  );
};

CustomIndicator.storyName = 'Custom spinning indicator';
CustomIndicator.parameters = {
  docs: {
    description: {
      story: 'Use custom loading indicator.',
    },
  },
};

export const EmbeddedMode = () => {
  const [loading, setLoading] = useState(false);

  const handleChange = (checked: boolean) => {
    setLoading(checked);
  };

  return (
    <div>
      <Spin spinning={loading} delay={500}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading State:
        <div style={{ display: 'inline-block', marginLeft: 8 }}>
          <Switch checked={loading} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

EmbeddedMode.storyName = 'Embedded mode and delay.';
EmbeddedMode.parameters = {
  docs: {
    description: {
      story:
        "- Embedding content into Spin will set it into loading state. \n- Specifies a `delay` for loading state. If `spinning` ends during delay, loading status won't appear.",
    },
  },
};
