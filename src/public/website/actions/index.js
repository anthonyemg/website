import * as actionTypes from '../constants';

export const resetState = () => ({ type: actionTypes.RESET_STATE });

export const updateSelectedSection = selection => ({
  type: actionTypes.UPDATE_SELECTED_SECTION,
  payload: selection,
})
