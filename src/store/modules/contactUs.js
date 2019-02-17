import axios from 'axios';

const mutations = {

};

const actions = {
  sendForm(data) {
    return axios.post('http://httpbin.org/post', data)
      .then(res => {
        console.log(res)
      })
  }
};

const getters = {

}

export default {
  mutations,
  actions,
  getters,
};
