import {useContext, useEffect} from 'react';
import ItemsContext from '../context/ItemsContext';

export function useItems() {
  const {items, listItems, loading, error} = useContext(ItemsContext);

  useEffect(() => {
    const subscriber = listItems();

    return () => subscriber();
  }, []);

  return {items, loading, error};
}
