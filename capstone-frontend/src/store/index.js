import { createStore } from 'vuex'
import axios from 'axios';
const baseUrl = "https://bookworm-co.onrender.com/";
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    product: null,
    msg: null
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
    setMsg: (state, msg) => {
      state.msg = msg;
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

  },
  modules: {
  }
})
