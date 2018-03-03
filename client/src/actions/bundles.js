import { FETCH_BUNDLES } from '../constants/ActionTypes';
import * as bundlesAPI from '../api/bundles';

export const fetchBundles = () => (dispatch, getState) => {
  return bundlesAPI.fetchBundles().then(response => {
    dispatch({
      type: FETCH_BUNDLES,
      payload: response,
    });
  });
};
