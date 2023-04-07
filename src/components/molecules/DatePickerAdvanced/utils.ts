// Libraries
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';

// Constants
import { DEFAULT_DATE_FORMAT } from './constants';

dayjs.extend(isoWeek);
dayjs.extend(quarterOfYear);

export const calculationDateAdvanced = (dateTypeKey = 'today', calculationTypeKey = 'minus', calculationDateKey: any = 'days', value = 0, dateFormat = DEFAULT_DATE_FORMAT) => {
  let date = dayjs();

  switch (dateTypeKey) {
    case 'today':
      date = dayjs();
      break;
    case 'first_day_of_week_mon_sun':
      date = dayjs().startOf('isoWeek');
      break;
    case 'first_day_of_week_sun_sat':
      date = dayjs().startOf('week');
      break;
    case 'first_day_of_month':
      date = dayjs().startOf('month');
      break;
    case 'first_day_of_quarter':
      date = dayjs().startOf('quarter');
      break;
    case 'first_day_of_year':
      date = dayjs().startOf('year');
      break;
    case 'last_day_of_week_mon_sun':
      date = dayjs().endOf('isoWeek');
      break;
    case 'last_day_of_week_sun_sat':
      date = dayjs().endOf('week');
      break;
    case 'last_day_of_month':
      date = dayjs().endOf('month');
      break;
    case 'last_day_of_quarter':
      date = dayjs().endOf('quarter');
      break;
    case 'last_day_of_year':
      date = dayjs().endOf('year');
      break;
    default:
      date = dayjs();
      break;
  }

  let newDate: any = '';

  newDate = calculationTypeKey === 'plus' ? dayjs(date).add(value, calculationDateKey) : dayjs(date).subtract(value, calculationDateKey);

  switch (dateTypeKey) {
    case 'last_day_of_month':
      if (calculationDateKey === 'months' || calculationDateKey === 'quarters') {
        newDate = dayjs(newDate).endOf('month');
      }
      break;
    case 'last_day_of_quarter':
      if (calculationDateKey === 'months' || calculationDateKey === 'quarters') {
        newDate = dayjs(newDate).endOf('month');
      }
      break;

    default:
      break;
  }

  return newDate.format(dateFormat);
};
