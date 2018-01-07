import { userConstants } from '../constants';

export const userActions = {
    login,
    logout,
    register,
    unregister
};

function login(user) {
    return dispatch => {
        dispatch({ type: userConstants.LOGIN_SUCCESS, user });
        localStorage.setItem('gtr-user', JSON.stringify(user));
    };
}

function logout() {
    localStorage.removeItem('gtr-user');
    return { type: userConstants.LOGOUT };
}

function register() {
    return dispatch => {
        dispatch({ type: userConstants.REGISTER_SUCCESS });
    };
}

function unregister() {
    return dispatch => {
        dispatch({ type: userConstants.REGISTER_FAILURE });
    };
}
