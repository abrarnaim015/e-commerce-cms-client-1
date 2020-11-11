import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../assets/axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allDataProduct: [],
    postDataCreate: [],
    getDataProductById: [],
    putDataEdit: [],
    deleteProduct: [],
    accesstoken: '',
    postRegisCustomer: [],
    postLoginCustomer: []
  },
  mutations: {
    setDataAllProduct (state, payload) {
      state.allDataProduct = payload
    },
    postDataCreate (state, payload) {
      state.postDataCreate = payload
    },
    getDataProductById (state, payload) {
      state.getDataProductById = payload
    },
    putDataEdit (state, payload) {
      state.putDataEdit = payload
    },
    deleteProduct (state, payload) {
      state.deleteProduct = payload
    },
    postLoginAdmin (state, payload) {
      state.accesstoken = payload
    },
    postRegisCustomer (state, payload) {
      state.postRegisCustomer = payload
    },
    postLoginCustomer (state, payload) {
      state.postLoginCustomer = payload
    }
  },
  actions: {
    loginAdmin (context, dataAdminLogin) {
      const payload = {
        email: dataAdminLogin.email,
        password: dataAdminLogin.password
      }
      return axios.post('/login/admin', payload)
    },
    regisCustomer (context, dataRegisCustomer) {
      const payload = {
        email: dataRegisCustomer.email,
        password: dataRegisCustomer.password
      }
      axios
        .post('/register', payload)
        .then(({ data }) => {
          context.commit('postRegisCustomer', data)
        })
        .catch(err => console.log(err))
    },
    loginCustomer (context, dataLoginCustomer) {
      const payload = {
        email: dataLoginCustomer.email,
        password: dataLoginCustomer.password
      }
      axios
        .post('/login/customer', payload)
        .then(({ data }) => {
          context.commit('postLoginCustomer', data)
        })
        .catch(err => console.log(err))
    },
    getAllDataProduct (context) {
      axios
        .get('/product')
        .then(({ data }) => {
          console.log(data)
          context.commit('setDataAllProduct', data)
        })
        .catch(err => console.log(err))
    }
    // createProduct (context, dataCreate) {
    //   axios
    //     .post('/product')
    //     .data({
    //       title: dataCreate.title,
    //       image_url: dataCreate.image_url,
    //       price: dataCreate.price,
    //       stock: dataCreate.stock
    //     })
    //     .then(({ data }) => {
    //       context.commit('postDataCreate', data)
    //     })
    //     .catch(err => console.log(err))
    // },
    // findDataProductById (context, id) {
    //   axios
    //     .get(`/product/${id}`)
    //     .then(({ data }) => {
    //       context.commit('getDataProductById', data)
    //     })
    //     .catch(err => console.log(err))
    // },
    // editDataProduct (context, dataEdit) {
    //   axios
    //     .put(`/product/${dataEdit.id}`)
    //     .data({
    //       title: dataEdit.title,
    //       image_url: dataEdit.image_url,
    //       price: dataEdit.price,
    //       stock: dataEdit.stock
    //     })
    //     .then(({ data }) => {
    //       context.commit('putDataEdit', data)
    //     })
    //     .catch(err => console.log(err))
    // },
    // deleteDataProduct (context, id) {
    //   axios
    //     .delete(`/product/${id}`)
    //     .then(({ data }) => {
    //       context.commit('deleteProduct', data)
    //     })
    //     .catch(err => console.log(err))
    // }
  },
  modules: {
  }
})
