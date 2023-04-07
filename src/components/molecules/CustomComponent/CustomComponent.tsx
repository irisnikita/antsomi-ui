import React from 'react';

import { Dropdown } from 'src/components/molecules/Dropdown';
import { Input } from 'src/components/atoms/Input';

export const CustomComponent: React.FC<any> = () => {
  const dropdownRender = () => (<div>jdosifjsidjo</div>);

  return (
    <Dropdown dropdownRender={dropdownRender}>
      <Input value="Dm ccc" />
    </Dropdown>
  );
};
