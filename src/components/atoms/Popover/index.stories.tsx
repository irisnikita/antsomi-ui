// Libraries
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Components
import { Popover } from './index';
import { Button } from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Popover',
  component: Popover,
  argTypes: {
    content: {
      name: 'content',
      description: 'Content of the card',
      table: {
        type: { summary: 'string | ReactNode | () => ReactNode' },
      },
      control: {
        type: 'select',
        options: {
          Text: 'Text content of card',
          ReactNode: <p>ReactNode content of card</p>,
        },
      },
    },
    title: {
      name: 'title',
      description: 'Title of the card',
      table: {
        type: { summary: 'string | ReactNode | () => ReactNode' },
      },
      control: {
        type: 'select',
        options: {
          Text: 'Text Title',
          ReactNode: <h3>ReactNode Title</h3>,
        },
      },
    },
    trigger: {
      name: 'trigger',
      description: 'Tooltip trigger mode. Could be multiple by passing an array',
      table: {
        type: { summary: 'hover | focus | click | contextMenu | Array<string>' },
        defaultValue: { summary: 'hover' },
      },
      defaultValue: 'hover',
      control: {
        type: 'select',
        options: {
          Hover: 'hover',
          Focus: 'focus',
          Click: 'click',
          Array: ['hover', 'click'],
        },
      },
    },
    placement: {
      name: 'placement',
      description: 'The position of the tooltip relative to the target, which can be one of ',
      table: {
        type: {
          summary:
            'string | top | left | right | bottom | topLeft | topRight | bottomLeft | bottomRight | leftTop | leftBottom | rightTop | rightBottom',
        },
        defaultValue: 'top',
      },
      defaultValue: 'top',
      control: {
        type: 'select',
        options: {
          top: 'top',
          left: 'left',
          right: 'right',
          bottom: 'bottom',
          topLeft: 'topLeft',
          topRight: 'topRight',
          bottomLeft: 'bottomLeft',
          bottomRight: 'bottomRight',
          leftTop: 'leftTop',
          leftBottom: 'leftBottom',
          rightTop: 'rightTop',
          rightBottom: 'rightBottom',
        },
      },
    },
    onVisibleChange: {
      name: 'onVisibleChange',
      description: 'Callback executed when visibility of the Popover card is changed',
      table: {
        type: { summary: '(newVisible: boolean) => void' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The floating card popped by clicking or hovering.' +
          '\n### When To Use' +
          '\n' +
          '- A simple popup menu to provide extra information or operations.' +
          '\n' +
          '- Comparing with Tooltip, besides information Popover card can also provide action elements like links and buttons.<br /> ' +
          '\n' +
          '\n### Notice' +
          '\n' +
          '- Please ensure that the child node of Popover accepts `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick` events.',
      },
    },
  },
} as unknown as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = args => {
  const content = (
    <div>
      <p>Content example 1</p>
      <p>Content example 2</p>
    </div>
  );

  return (
    <Popover content={content} title="Title example" {...args}>
      <Button type="primary">Hover me</Button>
    </Popover>
  );
};

export const Default = Template.bind({});

export const ThreeWaysToTrigger = () => {
  const Content = (
    <div>
      <p>Content 1</p>
      <p>Content 2</p>
    </div>
  );

  return (
    <div className="ants-container ants-flex ants-items-center ants-space-x-4">
      <Popover content={Content} title="Hover Me" trigger="hover">
        <Button>Hover me</Button>
      </Popover>
      <Popover content={Content} title="Focus Me" trigger="focus">
        <Button>Focus me</Button>
      </Popover>
      <Popover content={Content} title="Click Me" trigger="click">
        <Button>Click me</Button>
      </Popover>
    </div>
  );
};

ThreeWaysToTrigger.parameters = {
  docs: {
    description: {
      story: 'Mouse to click, focus and move in.',
    },
  },
};

export const Placement = () => {
  const Title = <h3>Title of ReactNode</h3>;
  const Content = (
    <div>
      <p>Content 1</p>
      <p>Content 2</p>
      <p>Content 3</p>
    </div>
  );

  const buttonWidth = 100;
  const marginTB = 12;

  return (
    <div>
      <div className="ants-flex ants-items-center ants-justify-evenly">
        <Popover title={Title} content={Content} placement="topLeft" trigger="click">
          <Button style={{ width: buttonWidth }}>Top Left</Button>
        </Popover>
        <Popover title={Title} content={Content} placement="top" trigger="click">
          <Button style={{ width: buttonWidth }}>Top</Button>
        </Popover>
        <Popover title={Title} content={Content} placement="topRight" trigger="click">
          <Button style={{ width: buttonWidth }}>Top Right</Button>
        </Popover>
      </div>
      <div className="ants-flex ants-justify-between ants-my-3">
        <div style={{ width: buttonWidth }}>
          <Popover title={Title} content={Content} placement="leftTop" trigger="click">
            <Button style={{ width: buttonWidth }}>Left Top</Button>
          </Popover>
          <Popover title={Title} content={Content} placement="left" trigger="click">
            <Button style={{ width: buttonWidth, marginTop: marginTB, marginBottom: marginTB }}>
              Left
            </Button>
          </Popover>
          <Popover title={Title} content={Content} placement="leftBottom" trigger="click">
            <Button style={{ width: buttonWidth }}>Left Bottom</Button>
          </Popover>
        </div>
        <div style={{ width: buttonWidth }}>
          <Popover title={Title} content={Content} placement="rightTop" trigger="click">
            <Button style={{ width: buttonWidth }}>Right Top</Button>
          </Popover>
          <Popover title={Title} content={Content} placement="right" trigger="click">
            <Button style={{ width: buttonWidth, marginTop: marginTB, marginBottom: marginTB }}>
              Right
            </Button>
          </Popover>
          <Popover title={Title} content={Content} placement="rightBottom" trigger="click">
            <Button style={{ width: buttonWidth }}>Right Bottom</Button>
          </Popover>
        </div>
      </div>
      <div className="ants-flex ants-justify-evenly ants-items-center">
        <Popover title={Title} content={Content} placement="bottomLeft" trigger="click">
          <Button style={{ width: buttonWidth }}>Bottom Left</Button>
        </Popover>
        <Popover title={Title} content={Content} placement="bottom" trigger="click">
          <Button style={{ width: buttonWidth }}>Bottom</Button>
        </Popover>
        <Popover title={Title} content={Content} placement="bottomRight" trigger="click">
          <Button style={{ width: buttonWidth }}>Bottom Right</Button>
        </Popover>
      </div>
    </div>
  );
};

Placement.parameters = {
  docs: {
    description: {
      story: 'There are 12 placement options available.',
    },
  },
};

export const ControllingTheCloseOfTheDialog = () => {
  const [visible, setVisible] = useState(false);

  const handleHide = () => {
    setVisible(false);
  };

  const handleVisibleChange = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  const Content = (
    <div>
      <p>Content 1</p>
      <p>Content 2</p>
      <Button type="text" onClick={handleHide}>
        Close
      </Button>
    </div>
  );

  return (
    <Popover
      title="Title"
      visible={visible}
      content={Content}
      trigger="click"
      onVisibleChange={handleVisibleChange}
    >
      <Button type="primary">Click me!</Button>
    </Popover>
  );
};

ControllingTheCloseOfTheDialog.parameters = {
  docs: {
    description: {
      story: 'Use `visible` prop to control the display of the card.',
    },
  },
};

export const HoverWithClickPopover = () => {
  const [visibleHover, setVisibleHover] = useState(false);
  const [visibleClick, setVisibleClick] = useState(false);

  const HoverContent = <p>This is hover content.</p>;

  const handleHoverVisible = (newVisibleHover: boolean) => {
    setVisibleHover(newVisibleHover);
  };

  const handleClickVisible = (newVisibleClick: boolean) => {
    setVisibleHover(false);
    setVisibleClick(newVisibleClick);
  };

  const hide = function () {
    setVisibleHover(false);
    setVisibleClick(false);
  };

  const ClickContent = (
    <div>
      <p>This is click content.</p>
      <Button type="ghost" onClick={hide}>
        Close
      </Button>
    </div>
  );

  return (
    <Popover
      title="Hover me"
      content={HoverContent}
      visible={visibleHover}
      trigger="hover"
      onVisibleChange={handleHoverVisible}
    >
      <Popover
        title="Click me"
        content={ClickContent}
        trigger="click"
        visible={visibleClick}
        onVisibleChange={handleClickVisible}
      >
        <Button>Hover / Click me!</Button>
      </Popover>
    </Popover>
  );
};

HoverWithClickPopover.parameters = {
  docs: {
    description: {
      story:
        'The following example shows how to create a popover which can be hovered and clicked.',
    },
  },
};
