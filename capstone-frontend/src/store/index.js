import { createStore } from 'vuex';
import router from '../router'
import axios from 'axios';
import { useCookies } from 'vue3-cookies';
const baseUrl = "https://bookworm-co.onrender.com/";
const { cookies } = useCookies();

export default createStore({
  state: {
    products: null,
    product: null,
    singleBook: null,
    cart: null,
    users: null,
    user: null || JSON.parse(localStorage.getItem('user')),
    userAuth: null,
    userLoggedIn: false,
    jwToken: null,
    msg: null,
    asc: true,
  },
  getters: {
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products
    },
    setProduct: (state, product) => {
      state.product = product
    },
    setSingleBook(state, product) {
      state.singleBook = product
    },
    setCart(state, cart) {
      state.cart = cart
    },
    setUsers: (state, users) => {
      state.users = users
    },
    setUser: (state, user) => {
      state.user = user,
      state.userAuth = true,
      localStorage.setItem('user', JSON.stringify(user))
    },
    setUserLoggedIn(state, userLoggedIn) {
      state.userLoggedIn = userLoggedIn
    },
    setToken (state, jwToken) {
      state.jwToken = jwToken
    },
    setMsg: (state, msg) => {
      state.msg = msg;
    },
    setPriceSort: (state) => {
      state.products.sort((a, b) => {
        return a.prodPrice - b.prodPrice;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    }
  },
  actions: {
    async fetchProducts(context) {
      try{
        let products = await (await fetch(baseUrl+"products")).json()
        if (products) {
          context.commit ("setProducts", products)
        } else {
          alert("error")
        }
      }
      catch (e) {
        console.error(e)
      }
    },
    async fetchProduct(context, id) {
      try{
        let { data } = await axios.get(`${baseUrl}product/${id}`);
        context.commit("setProduct", data.results);
      } catch(e) {
        context.commit("setMsg", "eeeeeeeerrrrrrroooorrrrr");
      }
    },
    async saveProduct(context, payload) {
      console.log("success");
      try {
        const { res } = await axios.post(`${baseUrl}product`, payload);
        const { msg, err } = await res.data;
        console.log(msg, err);
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        context.commit("setMsg", "eeeeerrrrrroooorrrr");
      }
    },
    async updateProduct(context, payload) {
      console.log(payload)
      try {
        const res = await axios.put(`${baseUrl}product/${payload.prodID}`, payload);
        const { msg, err } = await res.data;
        console.log(msg, err);
        if (err) {
          console.log("eeeerrrooorrr: ", err);
          context.commit("setMsg", err);
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
          context.commit("setMsg", "Updated Product");
        }
      } catch(e) {
        context.commit("setMsg", e);
      }
    },
    async deleteProduct(context, prodID) {
      alert("success");
      try {
        const { res } = await axios.delete(`${baseUrl}product/${prodID}`);
        const { msg, err} = await res.data;
        if (err) {
          alert("eeeerrrroooorrr, try again");
        }
        if (msg) {
          context.dispatch("fetchProducts")
          context.commit("setProduct", msg);
        } else {
          context.commit("setMsg", "eeeerrrrooorrr");
        }
      } catch (e) {
        context.commit("setMsg", "eeeeeerroooorrr")
      }
    },


    // async getCart(context, id) {
    //   const res = await axios.get(`${baseUrl}user/${id}/cart`);
    //   context.commit('setCart', res.data)
    //   console.log(id);
    // },
    async addCart(context, payload) {
      console.log(payload);
      let userID = localStorage.getItem('userID')
      const {res, msg} = await axios.post(`${baseUrl}user/${userID}/cart`, payload);
      if (res) {
        context.commit('setCart', res.data)
      } else {
        context.commit('setMsg', msg)
      }
    },
    async updateCart(context, id) {
      const res = await axios.put(`${baseUrl}/user/${id}cart/${id}`);
      let {results, err} = await res.data
      if (results) {
        context.commit('setCart', results)
      } else {
        context.commit('setMsg', err)
      }
    },
    async deleteCart({ commit, dispatch }, id) {
      try {
        await axios.delete(`${baseUrl}/user/${id}/cart`);
        commit('setMsg', 'Cart deleted successfully');
        dispatch('getCart');
      } catch (error) {
        commit('setMsg', 'Failed to delete');
      } 
    },
    async deleteACart({ commit, dispatch }, id) {
      try {
        await axios.delete(`${baseUrl}/user/${id}/cart/${id}`);
        commit('setMsg', 'Cart deleted successfully');
        dispatch('getCart');
      } catch (error) {
        commit('setMsg', 'Failed to delete');
      } 
    },
 


    async fetchUsers(context) {
      try{
        let users = await (await fetch(baseUrl+"users")).json()
        if (users) {
          context.commit ("setUsers", users)
        } else {
          alert("error")
        }
      }
      catch(e) {
        console.error(e)
      }
    },

    async fetchUser(context) {
      try {
        const { data } = await axios.get(`${baseUrl}user/:id`);
        context.commit("setMsg", data.results);
      } catch(e) {
        context.commit("setMsg", "eeeeerrrrrrooorrrrr");
      }
    },

    async saveUser(context, payload) {
      console.log("Success and stuff");
      try {
        const { res } = await axios.post(`${baseUrl}register`, payload);
        console.log('response:', res);
        alert ('User was created')
        let {result, msg, err} = await res.data;
        if (result) {
          context.commit("setUser", result);
        } else {
          context.commit("setMsg", msg);
        }
      } catch (e) {
        console.error(e)
      }
    },

    async updateUser(context, payload) {
      try {
        const res = await axios.put(`${baseUrl}user/${payload.userID}`, payload)
        console.log('response:', res);
        alert ('User was edited')
        let { results, err } = await res.data;
        if (results) {
          context.commit('setuser', results[0])
        } else {
          context.commit('setResponse', err)
        }
      } catch(e) {
        console.error(e);
      }
    },

    async deleteUser({ commit, dispatch }, id) {
      try {
        await axios.delete(`${baseUrl}user/${id}`)
        commit('setResponse', 'User was deleted');
        alert('User was deleted')
        dispatch('fetchUsers');
      } catch (e) {
        commit('setResponse', 'User did not delete')
      }
    },

    async login(context, payload) {
      try {
        const res = await axios.post(`${baseUrl}login`, payload);
        const { result, jwToken, msg, err } = await res.data;

        if (result) {
          context.commit("setUser", result);
          context.commit("setToken", jwToken);
          localStorage.setItem("setToken", jwToken);
          localStorage.setItem("user", JSON.stringify(result));
          cookies.set("setToken", jwToken);
          context.commit("setMsg", msg);
        } else {
          context.commit("setMsg", err);
        }
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: {
  }
})
