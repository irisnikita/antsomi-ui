import * as React from 'react';
import { render } from '@testing-library/react';

import { Spin } from '..';

describe('<Spin  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Spin />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
