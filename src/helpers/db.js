import axios from 'axios';
import { domain } from '../helpers/domain';

export const db = {
    getAll,
    getStatuses,
    getLoadTypes,
    saveLoad

};

function getAll() {
  return fetch(domain+'/api/loads').then(handleResponse);
}

function getStatuses() {
  return fetch(domain+'/api/statuses').then(handleResponse);
}

function getLoadTypes() {

  return fetch(domain+'/api/loadTypes').then(handleResponse);
  // return axios.get(domain+'/api/loadTypes')
  // .then((response) => {
  //   return response.json();
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
}

function saveLoad(load) {

      return axios.post(domain+'/api/createLoad', load)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
}


// promise handling
function handleResponse(response) {
  if (!response.ok) { 
      return Promise.reject(response.statusText);
  }

  return response.json();
}


