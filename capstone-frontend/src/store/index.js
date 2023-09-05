import { createStore } from 'vuex'
const baseUrl = "https://bookworm-co.onrender.com/";
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    product: null
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
  },
  modules: {
  }
})
