// Libraries
import React, { memo } from 'react';

// Antd Components
import { Switch as AntdSwitch } from 'antd';

// Types
import type { SwitchProps as AntdSwitchProps } from 'antd';

// Styled
import { SwitchWrapper } from './styled';

interface SwitchProps extends AntdSwitchProps {}

export const Switch: React.FC<SwitchProps> = memo(props => (
  <SwitchWrapper>
    <AntdSwitch {...props} />
  </SwitchWrapper>
));

Switch.defaultProps = {
  size: 'small',
};
