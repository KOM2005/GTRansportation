import axios from 'axios';
import { domain } from '../helpers/domain';

export const db = {
    getAll,
    getAllById,
    getStatuses,
    getLoadTypes,
    saveLoad,
    getLoadById,
    editLoadById,
    editStatusById
};


function getAll() {
  // return fetch(domain+'/api/allLoads').then(handleResponse);

  return axios.get(`${domain}/api/allLoads`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}


function getAllById(user) {
  return axios.get(`${domain}/api/loads/${user}`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}






function getStatuses() {
  // return fetch(domain+'/api/statuses').then(handleResponse);
  return axios.get(`${domain}/api/statuses/`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
}

function getLoadTypes() {
  // return fetch(`${domain}/api/loadTypes`).then(handleResponse);
  return axios.get(`${domain}/api/loadTypes/`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
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


function editLoadById(id, load) {
  
        return axios.post(`${domain}/api/editLoad/${id}`, load)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
  }

function editStatusById(id, load) {
  
        return axios.post(`${domain}/api/editStatus/${id}`, load)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
  }

function getLoadById(id) {

  return axios.get(`${domain}/api/load/${id}`)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });

  // return fetch(domain+'/api/loads/'+id).then(handleResponse);
}


// promise handling
// function handleResponse(response) {
//   if (!response.ok) { 
//       return Promise.reject(response.statusText);
//   }

//   return response.json();
// }


