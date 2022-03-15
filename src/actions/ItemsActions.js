import firestore from '@react-native-firebase/firestore';
import {
  ITEM_LIST_FAIL,
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
} from '../helpers/constants/itemsConstants';

export const listItemsFromFirestore = ({dispatch}) => {
  dispatch({type: ITEM_LIST_REQUEST});

  const subscriber = firestore()
    .collection('Products')
    .orderBy('date', 'desc')
    .onSnapshot(querySnapshot => {
      const itemsArr = [];

      querySnapshot.forEach(documentSnapshot => {
        itemsArr.push({
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        });
      });
      dispatch({type: ITEM_LIST_SUCCESS, payload: {items: itemsArr}});
    });

  return subscriber;
};
