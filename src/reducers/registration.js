import { userConstants } from '../constants';

export function registration(state = {isRegistered: true}, action) {
  switch (action.type) {
    case userConstants.REGISTER_SUCCESS:
      return { isRegistered: true };
    case userConstants.REGISTER_FAILURE:
      return { isRegistered: false };
    default:
      return state
  }
}