import { loadConstants } from '../constants';
import { loadActions } from '../actions/index';
import { db } from '../helpers/db'; 



export function loads(state = {data:[], isFetching: true}, action) {
  switch (action.type) {
    case loadConstants.GET_LOADS_REQUEST:
    case loadConstants.GET_LOADS_SUCCESS:
      return { data: action.loads, isFetching: false };
    default:
      return state
  }
}

export function statuses(state = {data:[]}, action) {
  switch (action.type) {
    case loadConstants.GET_STATUSES:
      return { data: action.statuses };
    default:
      return state
  }
}

export function loadTypes(state = {data:[]}, action) {
  switch (action.type) {
    case loadConstants.GET_LOAD_TYPES:
      return { data: action.loadTypes };
    default:
      return state
  }
}

export function addLoad(state = {}, action) {
  // console.log('action', action);
  switch (action.type) {
    case loadConstants.ADD_LOAD:
      return { data: action.load };
    default:
      return state
  }
}

export function load(state = {}, action) {
  // console.log('action', action);
  switch (action.type) {
    case loadConstants.GET_LOAD:
      return { data: action.load };
    default:
      return state
  }
}



