import React from 'react';
import ReactDOM from 'react-dom';

// Test Components
import TestButton from './components/Button/test';

import '@antscorp/icons/main.css';
import { ConfigProvider } from './components';

export const App = () => (
  <TestButton />
);

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
