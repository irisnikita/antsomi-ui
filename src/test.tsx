import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '@antscorp/icons/main.css';

import {
  ConfigProvider, DatePickerAdvanced,
} from './components';

export const App = () => {
  const [state, setState] = useState<{
    date: string,
    option: any,
    format: string
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
    <DatePickerAdvanced
      date={state.date}
      option={state.option}
      format={state.format}
      callbackNewDate={(newDate) => {
        setState((state) => ({ ...state, date: newDate }));
      }}
      onApply={({ option, date }) => setState((state) => ({
        ...state,
        option,
        date,
      }))}
    />
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
