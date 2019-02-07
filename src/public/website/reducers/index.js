import * as actionTypes from '../constants';

const initialState = {
  selectedSection: 'home',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.RESET_STATE:
      return initialState;
    case actionTypes.UPDATE_SELECTED_SECTION:
      return { ...state, selectedSection: payload };
    default:
      return state;
  }
};
