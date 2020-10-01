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
  },
  async fetchBoxTasks({ commit }, id) {
    let config = {
      headers: {
        Accept: "application/json"
      }
    };
    console.log(id);
    await axios
      .get(`http://127.0.0.1:8000/api/v1/task/?box=${id}`, config)
      .then(response => {
        commit("GOT_TASKS", response.data);
      });
  },
};

const mutations = {
  GOT_BOX: (state, data) => (state.box = data),
  GOT_TASKS: (state, data) => (state.tasks = data)

};

const getters = {
  nestState: state => state,
};

const state = {
  box: {},
  tasks: []
};

export default {
  state,
  getters,
  actions,
  mutations
};
