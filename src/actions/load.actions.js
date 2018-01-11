import { loadConstants } from '../constants';
import { db } from '../helpers/db'; 
// import axios from 'axios';
import { domain } from '../helpers/domain';
// import { loadConstants } from '../constants';

export const loadActions = {
    getLoads,
    getStatuses,
    getLoadTypes,
    addLoad

};

function getLoads() {
    return dispatch => {
        db.getAll()
        .then(
            loads => dispatch({ type: loadConstants.GET_LOADS_SUCCESS, loads })
        );
    };

}

function getStatuses() {
    return dispatch => {
        db.getStatuses()
        .then(
            statuses => dispatch({ type: loadConstants.GET_STATUSES,  statuses })
        );
    };

}

function getLoadTypes() {
    return dispatch => {
        db.getLoadTypes()
        .then(
            loadTypes => dispatch({ type: loadConstants.GET_LOAD_TYPES,  loadTypes })
        );
    };

}

function addLoad(load) {
    return dispatch => {
        db.saveLoad(load)
        .then(
            load => dispatch({ type: loadConstants.ADD_LOAD,  load })
        );
    };

}





function addLoad(load){
    return dispatch => {
        db.saveLoad(load)
        .then(
            load => dispatch({ type: loadConstants.ADD_LOAD, load })
        )

    }
}


