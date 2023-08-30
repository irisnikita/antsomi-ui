import * as React from 'react';
import { render } from '@testing-library/react';

import { Switch } from '..';

describe('<Switch  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Switch />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
