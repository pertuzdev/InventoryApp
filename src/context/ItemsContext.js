import React, {useReducer} from 'react';

import {listItemsFromFirestore} from '../actions/ItemsActions';

import itemsReducer from '../reducers/itemsReducer';

const ItemsContext = React.createContext({});

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export function ItemsProvider({children}) {
  const [state, dispatch] = useReducer(itemsReducer, initialState);

  const {items, loading, error} = state;

  const listItems = () => {
    return listItemsFromFirestore({dispatch});
  };

  const contextValues = {
    items,
    loading,
    error,
    listItems,
  };

  return (
    <ItemsContext.Provider value={contextValues}>
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsContext;
