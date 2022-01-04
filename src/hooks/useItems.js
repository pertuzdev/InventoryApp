import React, {useEffect, useState} from 'react';

import firestore from '@react-native-firebase/firestore';
import getItems from '../services/firestore/getItems';

export default function useItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const subscriber = getItems(itemsArray => setItems(itemsArray));
    setLoading(false);
    return () => subscriber();
  }, []);

  return {items, loading};
}
