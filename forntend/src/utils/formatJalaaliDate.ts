import moment from 'moment-jalaali';

export const formatjalaaliDate = (date: string, showHours = true): string => {
  const parsedMoment = moment(date);
  const jalaaliDate = showHours
    ? parsedMoment.format('jYYYY/jM/jD - HH:mm')
    : parsedMoment.format('jYYYY/jM/jD');
  if (jalaaliDate !== 'Invalid date') {
    return jalaaliDate;
  } else {
    return '____';
  }
};
