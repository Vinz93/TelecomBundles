import { FETCH_BUNDLES } from '../constants/ActionTypes';

export default function bundles(state = [], action) {
  switch (action.type) {
    case FETCH_BUNDLES:
      return action.payload;
    default:
      return state;
  }
}
