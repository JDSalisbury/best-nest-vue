import Vue from "vue";
import Vuex from "vuex";
import Nest from "./nest";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Nest }
});
