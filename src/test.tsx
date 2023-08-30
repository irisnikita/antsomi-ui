/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '@antscorp/icons/main.css';

import {
  ColorSetting,
  ConfigProvider,
  DatePicker,
  EdgeSetting,
  // ChatBox
  // Help,
} from './components';

// Constants
import { THEME } from './constants';

export const BACKGROUND_COLOR_STYLE = {
  SOLID: {
    value: 'color',
    label: 'Solid',
  },
  GRADIENT: {
    value: 'gradient',
    label: 'Gradient',
  },
};

export const customColors = [
  '#f7da64',
  '#8912dd',
  '#ed1515',
  '#230439',
  '#d11a66',
  '#ffbd64',
  '#f1ab96',
  '#824ccd',
  '#5858e9',
  '#57b8c2',
];

type MarginProps = number | 'auto';
type ValueProps = [MarginProps, MarginProps, MarginProps, MarginProps];

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

  // return (
  //   <div style={{ width: '100vw', height: '1000px', display: 'flex', justifyContent: 'center' }}>
  //     <Help />
  //   </div>
  // );

  return (
    <DatePicker.AdvancedRangePicker
      disabled
      showTime={false}
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
