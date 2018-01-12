import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { registration } from './registration';
import { loads, statuses, loadTypes, addLoad, load } from './loads';


const rootReducer = combineReducers({
  authentication,
  registration, 
  loads,
  statuses,
  loadTypes,
  addLoad,load
});

export default rootReducer;