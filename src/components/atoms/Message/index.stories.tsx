// Libraries
import React from 'react';
import { ComponentStory } from '@storybook/react';

// Components
import { Message } from './index';
import { Button } from '../Button';

// Types
import { ArgsProps } from 'antd/lib/message';
import { Space } from '../Space';

export default {
  title: 'Atoms/Message',
  component: Message,
  argTypes: {
    content: {
      name: 'content',
      defaultValue: undefined,
      description: 'The content of the message',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    duration: {
      name: 'duration',
      defaultValue: 3,
      description: "Time(seconds) before auto-dismiss, don't dismiss if set to 0",
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
      control: {
        type: 'number',
      },
    },
    icon: {
      name: 'icon',
      defaultValue: undefined,
      description: 'Customized Icon',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: '-' },
      },
    },
    className: {
      name: 'className',
      defaultValue: undefined,
      description: 'Customized CSS class',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    key: {
      name: 'key',
      defaultValue: undefined,
      description: 'The unique identifier of the Message',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: 'text',
      },
    },
    style: {
      name: 'style',
      defaultValue: undefined,
      description: 'Customized inline style',
      table: {
        type: { summary: 'CSSPropertiese' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: '-',
      },
    },
    onClick: {
      name: 'onClick',
      defaultValue: undefined,
      description: 'Specify a function that will be called when the message is clicked',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: '-',
      },
    },
    onClose: {
      name: 'onClose',
      defaultValue: undefined,
      description: 'Specify a function that will be called when the message is closed',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: '-' },
      },
      control: {
        type: '-',
      },
    },
  },
} as any;

const Template: ComponentStory<any> = (args: ArgsProps) => {
  const onClickOpenMessage = () => {
    Message.info(args);
  };
  return <Button onClick={onClickOpenMessage}>Click to open message</Button>;
};

export const Default = Template.bind({});

Default.args = {
  content: 'hello',
};

Default.parameters = {
  docs: {
    description: {
      component:
        'Display global messages as feedback in response to user operations.\n # When to Use \n- To provide feedback such as success, warning, error etc.\n- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.',
    },
  },
};

export const NormalPrompt: ComponentStory<any> = (args: ArgsProps) => {
  const info = () => {
    Message.info('This is a normal message');
  };
  return (
    <Button type="primary" onClick={info}>
      Display normal message
    </Button>
  );
};

NormalPrompt.parameters = {
  docs: {
    description: {
      story: 'Normal message for information.\n ##### Example',
    },
  },
};

// OtherMessage
export const OtherMessage: ComponentStory<any> = (args: ArgsProps) => {
  const success = () => {
    Message.success('This is a success message');
  };

  const error = () => {
    Message.error('This is an error message');
  };

  const warning = () => {
    Message.warning('This is a warning message');
  };
  return (
    <Space>
      <Button onClick={success}>Success</Button>
      <Button onClick={error}>Error</Button>
      <Button onClick={warning}>Warning</Button>
    </Space>
  );
};

NormalPrompt.parameters = {
  docs: {
    description: {
      story: 'Messages of success, error and warning types.\n ##### Example',
    },
  },
};

// Customize duration
export const CustomizeDuration: ComponentStory<any> = (args: ArgsProps) => {
  const success = () => {
    Message.success(
      'This is a prompt message for success, and it will disappear in 10 seconds',
      10,
    );
  };
  return <Button onClick={success}>Customized display duration</Button>;
};

CustomizeDuration.parameters = {
  docs: {
    description: {
      story: 'Customize message display duration from default 3s to 10s.\n ##### Example',
    },
  },
};

// Message with loading indicator
export const MessageLoading: ComponentStory<any> = (args: ArgsProps) => {
  const success = () => {
    const hide = Message.loading('Action in progress..', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };
  return <Button onClick={success}>Display a loading indicator</Button>;
};

MessageLoading.parameters = {
  docs: {
    description: {
      story:
        'Display a global loading indicator, which is dismissed by itself asynchronously.\n ##### Example',
    },
  },
};

// Promise interface
export const PromiseInterface: ComponentStory<any> = (args: ArgsProps) => {
  const success = () => {
    Message.loading('Action in progress..', 2.5)
      .then(() => Message.success('Loading finished', 2.5))
      .then(() => Message.info('Loading finished is finished', 2.5));
  };
  return <Button onClick={success}>Display sequential messages</Button>;
};

PromiseInterface.parameters = {
  docs: {
    description: {
      story:
        'message provides a promise interface for onClose. The above example will display a new message when the old message is about to close.\n ##### Example',
    },
  },
};

// Update Message Content
export const UpdateMessage: ComponentStory<any> = (args: ArgsProps) => {
  const key = 'updatable';
  const openMessage = () => {
    Message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      Message.success({ content: 'Loaded!', key, duration: 2 });
    }, 1000);
  };
  return (
    <Button type="primary" onClick={openMessage}>
      Open the message box
    </Button>
  );
};

UpdateMessage.parameters = {
  docs: {
    description: {
      story: 'Update message content with unique key.\n ##### Example',
    },
  },
};

// Content with hooks
export const ContentHook: ComponentStory<any> = (args: ArgsProps) => {
  const Context = React.createContext({ name: 'Default' });
  const [messageApi, contextHolder] = Message.useMessage();

  const info = () => {
    messageApi.open({
      type: 'info',
      content: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      duration: 1,
    });
  };
  return (
    <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </Context.Provider>
  );
};

ContentHook.parameters = {
  docs: {
    description: {
      story:
        'Use message.useMessage to get contextHolder with context accessible issue.\n ##### Example',
    },
  },
};

// style message
export const CustomizeStyle: ComponentStory<any> = (args: ArgsProps) => {
  const success = () => {
    Message.success({
      content: 'This is a prompt message with custom className and style',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };
  return <Button onClick={success}>Customized style</Button>;
};

CustomizeStyle.parameters = {
  docs: {
    description: {
      story: 'The style and className are available to customize Message.\n ##### Example',
    },
  },
};
