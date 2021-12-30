export const MONTHS_SPA = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];

export const MONTHS_ENG = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

export const DAYS_SPA = [
  'domingo',
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
];

export const DAYS_ENG = [
  'sunday',
  'monday',
  'tuesday',
  'wendsday',
  'thursday',
  'friday',
  'saturday',
];

export const timestampToDate = timestamp => {
  return new Date(timestamp);
};

export const dateToTimestamp = date => {
  return Date.parse(date);
};

export const formatDate = ({date}) => {
  console.log(date, 'que pedo');
  const [monthWord, monthNumber, dayNumber, dayWord, year] = [
    MONTHS_SPA[date.getMonth()],
    date.getMonth(),
    date.getDate(),
    DAYS_SPA[date.getDay()],
    date.getFullYear(),
  ];

  const day = `${dayWord.charAt(0).toUpperCase() + dayWord.slice(1)}`;

  const [hour, minutes] = [date.getHours(), date.getMinutes()];

  const dateInWords = `${dayNumber} de ${monthWord} del ${year}`;

  const standardDate = `${dayNumber}/${monthNumber}/${year}`;

  return {dateInWords, standardDate};
};
