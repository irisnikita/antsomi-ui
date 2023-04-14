import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '@antscorp/icons/main.css';

import { ConfigProvider, DatePicker } from './components';

export const App = () => {
  const [state, setState] = useState<{
    date: string;
    option: any;
    format: string;
  }>({
    option: {
      dateType: 'today',
      calculationDate: 'years',
      calculationType: 'minus',
      value: 1,
    },
    date: '',
    format: 'YYYYMMDD',
  });

  return (
    <DatePicker.AdvancedRangePicker
      timeRange={{
        startDate: {
          date: '',
          calculationDate: 'years',
          value: 1,
          calculationType: 'minus',
          dateType: 'today',
        },
        endDate: {
          date: '',
          calculationDate: 'days',
          value: 1,
          calculationType: 'minus',
          dateType: 'today',
        },
      }}
    />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale="vi">
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
