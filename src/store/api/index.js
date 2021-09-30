import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.common['id'] =` ${JSON.parse(localStorage.getItem('profile')).id}`;
    req.headers.common['X-Access-Token'] =` ${JSON.parse(localStorage.getItem('profile'))['X-Access-Token']}`;
  }

  return req;
});


export const clientLogin = formData => API.post(`/user/login`, formData);
export const clientSignup = formData => API.post(`/user/register`, formData);


export const getMyFeedBacks = pageNum =>  API.get(`/feedback/getMyFeedBacks?pageNumber=${pageNum | 0}`);
export const deleteFeedBack = id =>  API.post(`/feedback/deleteFeedBack`,  {feedbackId: id});
export const createFeedback = feedback =>  API.post(`/feedback/createFeedBack`, feedback,  {headers: {'content-type': 'multipart/form-data'}});

// ##admin
export const adminLogin = formData => API.post(`/admin/login`, formData);
export const adminRegister = formData => API.post(`/admin/register`, formData);
export const getUsers = () => API.get(`/adminControl/getUsers?pageNumber=0`);
export const getFeedBacks = () => API.get(`/adminControl/getFeedBacks?pageNumber=0`);
export const setAccountStatus = status => {
  console.log("fdsfsdiiosjf", status);
  return API.post(`/adminControl/setAccountStatus`, status)};

  export const editFeedback = (formdata) => API.post(`/feedback/editFeedBack`, formdata,  {headers: {'content-type': 'multipart/form-data'}})