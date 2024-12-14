import { addDays, format, parseISO } from 'date-fns';

const capitalizeFirstLetterOfEachWordRemove_ = (inputString: string) => {
  const wordsArray = inputString.split('_');
  const capitalizedWords = wordsArray.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word;
    }
  });
  return capitalizedWords.join(' ');
};

const isValidUrl = (urlString) => {
  // eslint-disable-next-line no-useless-escape
  const regex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return regex.test(urlString);
};

const capitalizeFirstChar = (inputString: string) => {
  if (typeof inputString !== 'string') {
    console.error('Input should be a string');
    return;
  }

  if (inputString.length === 0) {
    console.error('Input string is empty');
    return;
  }

  const resultString =
    inputString.charAt(0).toUpperCase() + inputString.slice(1);

  return resultString;
};

const capitalizeSentence = (sentence) => {
  if (typeof sentence !== 'string' || sentence.length === 0) {
    return 'Invalid input. Please provide a non-empty string.';
  }
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, 'MM/dd/yyyy');
};

const getNextDates = (nextOrderDate, intervalDays) => {
  const dates: any = [];
  let currentDate = new Date(nextOrderDate);

  for (let i = 0; i < 4; i++) {
    dates.push(format(currentDate, 'yyyy-MM-dd'));
    currentDate = addDays(currentDate, parseInt(intervalDays));
  }

  return dates;
};

const splitDate = (dateString) => {
  const [month, day] = dateString.split(', ');
  return { month, day };
};

const formatDateWithTime = (isoString) => {
  const date = parseISO(isoString);
  let formattedDate = format(date, 'MM/dd/yyyy h:mm a');
  formattedDate = formattedDate.replace('AM', 'am').replace('PM', 'pm');
  return formattedDate;
};

const formatTime = (dateString) => {
  const date = new Date(dateString);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  return `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
};

const replaceBaseUrl = (url) => {
  const baseUrl = 'https://www.smilebrilliant.com';
  return url.replace(baseUrl, '..');
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default {
  capitalizeFirstLetterOfEachWordRemove_,
  isValidUrl,
  capitalizeFirstChar,
  capitalizeSentence,
  formatDate,
  getNextDates,
  splitDate,
  formatDateWithTime,
  formatTime,
  replaceBaseUrl,
  isValidEmail,
};
