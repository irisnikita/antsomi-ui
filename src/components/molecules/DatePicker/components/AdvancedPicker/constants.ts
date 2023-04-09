// Types
import { TAdvancedType } from './types';

export const DATE_TYPES = [
  { value: 'today', label: 'Today' },
  { value: 'first_day_of_week_mon_sun', label: 'First day of this week (Mon - Sun)' },
  { value: 'first_day_of_week_sun_sat', label: 'First day of this week (Sun - Sat)' },
  { value: 'first_day_of_month', label: 'First day of this month' },
  { value: 'first_day_of_quarter', label: 'First day of this quarter' },
  { value: 'first_day_of_year', label: 'First day of this year' },
  { value: 'last_day_of_week_mon_sun', label: 'Last day of this week (Mon - Sun)' },
  { value: 'last_day_of_week_sun_sat', label: 'Last day of this week (Sun - Sat)' },
  { value: 'last_day_of_month', label: 'Last day of this month' },
  { value: 'last_day_of_quarter', label: 'Last day of this quarter' },
  { value: 'last_day_of_year', label: 'Last day of this year' },
  { value: 'fixed', label: 'Fixed' },
];

export const CALCULATION_TYPES = [
  { value: 'minus', label: 'Minus' },
  { value: 'plus', label: 'Plus' },
];

export const CALCULATION_DATES = [
  { value: 'seconds', label: 'Seconds' },
  { value: 'minutes', label: 'Minutes' },
  { value: 'hours', label: 'Hours' },
  { value: 'days', label: 'Days' },
  { value: 'weeks', label: 'Weeks' },
  { value: 'months', label: 'Months' },
  { value: 'quarters', label: 'Quarters' },
  { value: 'years', label: 'Years' },
];

export const VALUE_TYPES = {
  INPUT_TEXT: 'INPUT_TEXT',
  INPUT_NUMBER: 'INPUT_NUMBER',
  MATCHES_ANY: 'MATCHES_ANY',
  YEAR: 'YEAR',
  YEAR_QUARTER: 'YEAR_QUARTER',
  YEAR_MONTH: 'YEAR_MONTH',
  YEAR_WEEK: 'YEAR_WEEK',
  YEAR_MONTH_DAY: 'YEAR_MONTH_DAY',
  YEAR_MONTH_DAY_HOUR: 'YEAR_MONTH_DAY_HOUR',
  YEAR_MONTH_DAY_MINUTE: 'YEAR_MONTH_DAY_MINUTE',
  YEAR_MONTH_DAY_SECOND: 'YEAR_MONTH_DAY_SECOND',
  QUARTER: 'QUARTER',
  MONTH: 'MONTH',
  WEEK: 'WEEK',
  MONTH_DAY: 'MONTH_DAY',
  DAY_OF_WEEK: 'DAY_OF_WEEK',
  DAY: 'DAY',
  HOUR: 'HOUR',
  MINUTE: 'MINUTE',
  INPUT_TEXT_NO_FIELD: 'INPUT_TEXT_NO_FIELD',
};

export const DEFAULT_DATE_FORMAT = 'YYYYMMDDHHmmss';
export const DEFAULT_TIME_FORMAT = 'HH:mm:ss';
export const DEFAULT_DATE_DISPLAY_FORMAT = 'DD/MM/YYYY HH:mm:ss';

export const TIME_PICKER_TYPE = {
  DATE_TIME: 'DateTime',
  DATE_HOUR: 'DateHour',
  DATE_HOUR_MINUTE: 'DateHourMinute',
  DATE: 'Date',
};

export const YEAR_PICKER_TYPE = {
  YEAR: 'year',
  MONTH: 'month',
  QUARTER: 'quarter',
};

export const ADVANCED_PICKER_TYPE: Record<string, { value: TAdvancedType, label: string }> = {
  START_DATE: {
    value: 'startDate',
    label: 'Start Date',
  },
  END_DATE: {
    value: 'endDate',
    label: 'End Date',
  },
};
