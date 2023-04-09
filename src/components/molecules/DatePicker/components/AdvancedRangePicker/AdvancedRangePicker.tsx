// Libraries
import dayjs from 'dayjs';
import React from 'react';
import omit from 'lodash/omit';
import isEqual from 'react-fast-compare';

// Types
import { TOption } from '../AdvancedPicker/types';
import { TOnChangeMode, TOnChangePayload, TTimeRange } from './types';

// Atoms
import { Space } from 'src/components/atoms';

// Molecules
import { AdvancedPicker } from 'src/components/molecules/DatePicker/components/AdvancedPicker';

// Constants
import { ADVANCED_RANGE_PICKER_FORMAT } from './constants';

// Utils
import { handleError } from 'src/utils/handleError';

export interface AdvancedRangePickerProps {
  timeRange: TTimeRange,
  errorMessage?: string,
  showLabel?: boolean,
  onChange?: ({
    timeRange,
    mode,
  }: TOnChangePayload) => void
}

const PATH = 'src/components/molecules/DatePicker/components/AdvancedRangePicker/AdvancedRangePicker.tsx';

export const AdvancedRangePicker: React.FC<AdvancedRangePickerProps> = (props) => {
  // Props
  const {
    timeRange, errorMessage, showLabel, onChange,
  } = props;

  // Handles
  const onUpdateTimeRange = (key: 'startDate' | 'endDate', params: Partial<TOption & { date: string }>, mode: TOnChangeMode = 'user') => {
    try {
      if (typeof onChange === 'function') {
        const newTimeRange = {
          ...timeRange,
          [key]: {
            ...timeRange[key],
            ...params,
          },
        };

        if (!isEqual(newTimeRange, timeRange)) {
          onChange({
            timeRange: newTimeRange,
            mode,
          });
        }
      }
    } catch (error) {
      // Handle Error
      handleError(error, {
        path: PATH,
        name: 'onUpdateTimeRange',
        args: {},
      });
    }
  };

  return (
    <Space size={20}>
      <AdvancedPicker
        label={showLabel ? 'Start Date' : ''}
        date={timeRange.startDate.date}
        option={omit(timeRange.startDate, 'date')}
        operatorKey="between"
        type="startDate"
        format={ADVANCED_RANGE_PICKER_FORMAT.startDate}
        errorMessage={errorMessage}
        disableAfterDate={timeRange.endDate.date}
        onUpdatedNewDate={(date) => onUpdateTimeRange('startDate', { date }, 'system')}
        onApply={({ date, option }) => onUpdateTimeRange('startDate', { date, ...option }, 'user')}
      />

      <AdvancedPicker
        label={showLabel ? 'End Date' : ''}
        date={timeRange.endDate.date}
        option={omit(timeRange.endDate, 'date')}
        operatorKey="between"
        type="endDate"
        format={ADVANCED_RANGE_PICKER_FORMAT.endDate}
        errorMessage={errorMessage}
        onUpdatedNewDate={(date) => onUpdateTimeRange('endDate', { date }, 'system')}
        onApply={({ date, option }) => onUpdateTimeRange('endDate', { date, ...option }, 'user')}
      />
    </Space>
  );
};

AdvancedRangePicker.defaultProps = {
  timeRange: {
    startDate: {
      date: dayjs().format(ADVANCED_RANGE_PICKER_FORMAT.startDate),
      calculationDate: 'years',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
    endDate: {
      date: dayjs().format(ADVANCED_RANGE_PICKER_FORMAT.endDate),
      calculationDate: 'days',
      value: 1,
      calculationType: 'minus',
      dateType: 'today',
    },
  },
  errorMessage: '',
  showLabel: true,
};
