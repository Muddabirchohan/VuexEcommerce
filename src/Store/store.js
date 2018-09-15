import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    description: {}
  },

  mutations: {

    FETCH_PRODUCTS(state, products) {
      state.products = products;
    },

    ADD_DATA(state,obj) {
      state.cart = [...state.cart, obj];
      console.log(this.state.cart)
    },

  GOTO_DESCRIPTION(state,obj) {
state.description = obj
console.log(state.description)
}


  },

  actions: {

    fetchProducts({ commit }) {
      axios
        .get("https://greencommunitylaundry.herokuapp.com/api/products")
        .then(response => {
          commit("FETCH_PRODUCTS", response);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.statusText);
        });
    },
      addToCart({ commit }, obj) {
      commit("ADD_DATA",obj);
    },

    showDesc({commit},obj) {
    commit('GOTO_DESCRIPTION',obj)
    }
  },

  getters: {
    products: state => state.products,
    cart: state => state.cart,
    description: state => state.description
  }
});
