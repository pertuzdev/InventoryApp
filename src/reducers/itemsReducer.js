import {
  ITEM_LIST_FAIL,
  ITEM_LIST_REQUEST,
  ITEM_LIST_SUCCESS,
} from '../helpers/constants/itemsConstants';

export default function itemsReducer(state, action) {
  switch (action.type) {
    case ITEM_LIST_REQUEST:
      return {...state, loading: true};
    case ITEM_LIST_SUCCESS:
      return {...state, loading: false, items: action.payload.items};
    case ITEM_LIST_FAIL:
      return {...state, loading: false, error: action.payload.error};
  }
}
