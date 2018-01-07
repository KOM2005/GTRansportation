import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { registration } from './registration';
// import { user } from './user';
// import { alert } from './alert';

const rootReducer = combineReducers({
  authentication,
  // alert,
  registration 
  // user
});

export default rootReducer;