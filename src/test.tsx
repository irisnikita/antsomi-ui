import React from 'react';
import ReactDOM from 'react-dom/client';

import ConfigProvider from './configProvider';

import { Button } from './index';

export const App = () => (
  <div>
    <Button />
  </div>
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
