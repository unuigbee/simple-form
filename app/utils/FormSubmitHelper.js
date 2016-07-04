// We are using axios as a promise based library to make XMLHTTP request
// We are using Qs to stringify our form data, ready to be sent to the server
import axios from 'axios';
import Qs from 'qs';

// default configuration for baseURL. Feel free to change to your domain
axios.defaults.baseURL = 'http://www.eunuigbe.home/~unuigbee';

// Defines helpers functions for working with getting and submitting data
const helpers = {
  postFormData(formData) {
    // We send a stringified version of our formData to the server
    // Note: Your server might need to have CORS enabled
    return axios.post('/form_app/index.php/form_entry/create/', Qs.stringify(formData))
      .then(function(info) {
        console.warn('Success in get Player Info', info);
        return info.data;
      })
      .catch(function(err) {
        console.warn('Error in get Player Info', err);
      });
  },
};
export default helpers;
