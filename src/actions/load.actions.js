import { loadConstants } from '../constants';
import { db } from '../helpers/db'; 


export const loadActions = {
    getLoads,
    getLoadsById,
    getStatuses,
    getLoadTypes,
    addLoad,
    // getLoad,
    editLoad,
    editStatus

};

function getLoads() {
    return dispatch => {
        db.getAll()
        .then(
            loads => dispatch({ type: loadConstants.GET_LOADS_SUCCESS, loads })
        )
    };
}

function getLoadsById(user) {
    return dispatch => {
        db.getAllById(user)
        .then(
            loads => dispatch({ type: loadConstants.GET_LOADS_SUCCESS, loads })
        )
    };

}



function editLoad(id, load, user) {
    return dispatch => {
        db.editLoadById(id, load)
        .then(
            load => dispatch({ type: loadConstants.EDIT_LOAD, load })
        )
        .then( () =>
            dispatch(getLoadsById(user))
        );
    };

}

function editStatus(id, load) {
    return dispatch => {
        db.editStatusById(id, load)
        .then(
            load => dispatch({ type: loadConstants.EDIT_LOAD, load })
        )
        .then( () =>
            dispatch(getLoads())
        );
    };

}

function addLoad(load, user) {
    return dispatch => {
        db.saveLoad(load)
        .then( () =>
            dispatch(getLoadsById(user))
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







// function addLoad(load){
//     return dispatch => {
//         db.saveLoad(load)
//         .then(
//             newLoad => dispatch({ type: loadConstants.ADD_LOAD, newLoad })
//         )

//     }
// }


