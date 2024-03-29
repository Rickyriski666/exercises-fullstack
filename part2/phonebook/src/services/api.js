import axios from 'axios';
// const baseURL = 'https://phonebook-backend-rho.vercel.app/api/persons';
const baseURL = 'http://localhost:3001/api/persons';

const getAll = () => {
  return axios.get(baseURL);
};

const create = (newObject) => {
  return axios.post(baseURL, newObject);
};

const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

const update = (id, newObject) => {
  return axios.put(`${baseURL}/${id}`, newObject);
};

export default { getAll, create, deletePerson, update };
