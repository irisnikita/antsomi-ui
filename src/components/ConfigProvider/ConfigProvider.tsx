// Libraries
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import { ConfigProviderProps as AntdConfigProviderProps } from 'antd/es/config-provider';
import React, { ReactNode } from 'react';

// Constants
import { THEME } from 'src/constants';

// Style
import { GlobalStyle } from './GlobalStyle';

interface ConfigProviderProps extends AntdConfigProviderProps {
  children?: ReactNode
}

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  // Props
  const { children, ...restOfProps } = props;

  return (
    <AntdConfigProvider {...restOfProps}>
      <GlobalStyle />
      <StyleProvider hashPriority="high">
        {children}
      </StyleProvider>
    </AntdConfigProvider>
  );
};

ConfigProvider.defaultProps = {
  theme: THEME,
  prefixCls: 'antsomi',
};

export default ConfigProvider;
