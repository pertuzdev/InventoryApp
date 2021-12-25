import React, {useEffect, useState} from 'react';

import {MONTHS_SPA, DAYS_SPA} from '../helpers/dates';

export default function useDate() {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [dateText, setDateText] = useState('');

  console.log(timestamp, dateText, 'kim Da Mi');

  return {timestamp, setTimestamp, dateText, setDateText};
}
