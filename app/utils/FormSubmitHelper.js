import axios from 'axios';
import Qs from 'qs';

const helpers = {
  postFormData(formData) {
    return axios.post('http://www.eunuigbe.home/~unuigbee/form_app/index.php/form_entry/create/', Qs.stringify(formData)
    )
    .then(function(info) {
      console.warn('Success in get Player Info', info);
    })
    .catch(function(err) {
      console.warn('Error in get Player Info', err);
    });
  },
};
export default helpers;
