// We are using axios as a promise based library to make XMLHTTP request
// We are using Qs to stringify our form data, ready to be sent to the server
import axios from 'axios';
import Qs from 'qs';

// default configuration for baseURL. Feel free to change to your webserver domain url
// to suit your backend application
axios.defaults.baseURL = 'http://www.eunuigbe.home/~unuigbee';

// Defines helpers functions for working with getting and submitting data
const helpers = {
  postFormData(formData) {
    // We send a stringified version of our formData to the server
    // Note: Your server might need to have CORS enabled if the client application
    // and server application originate from different server domains
    return axios.post('/form_app/index.php/form_entry/create/', Qs.stringify(formData))
      .then(function(info) {
        console.log('Success in posting form data', info);
        return info.data;
      })
      .catch(function(err) {
        console.warn('Error in posting form data', err);
      });
  },
  // Get user makes a call to our backend server to get users
  // On success we get promised data and on failure we catch the error
  getUsers() {
    return axios.get('/form_app/index.php/form_entry/getusers/')
      .then(function(info) {
        console.log('Success in getting users data', info);
        return info.data;
      })
      .catch(function(err) {
        console.warn('Error in getting users data', err);
      });
  },
};
export default helpers;
