import axios from "axios";

const actions = {
  async fetchBox({ commit }) {
    let config = {
      headers: {
        Accept: "application/json",
      }
    };
    await axios
      .get("http://127.0.0.1:8000/api/v1/box/1/", config)
      .then(response => {
        commit("GOT_BOX", response.data);
      });
  }

};

const mutations = {
  GOT_BOX: (state, data) => (state.box = data),

};

const getters = {
  nestState: state => state,
};

const state = {
  box: {}
};

export default {
  state,
  getters,
  actions,
  mutations
};
