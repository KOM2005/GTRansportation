import axios from 'axios';
import { domain } from '../helpers/domain';

export const db = {
    getAll,
    getStatuses,
    getLoadTypes,
    saveLoad,
    getLoadById

};

function getAll() {
  return fetch(domain+'/api/loads').then(handleResponse);
  // return axios.get(domain+'/api/loads')
  // .then((response) => {
  //   // return response;
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

}

function getStatuses() {
  return fetch(domain+'/api/statuses').then(handleResponse);
}

function getLoadTypes() {

  return fetch(`${domain}/api/loadTypes`).then(handleResponse);
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

function getLoadById(id) {

  return axios.get(`${domain}/api/loads/${id}`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });

  // return fetch(domain+'/api/loads/'+id).then(handleResponse);
}


// promise handling
function handleResponse(response) {
  if (!response.ok) { 
      return Promise.reject(response.statusText);
  }

  return response.json();
}


