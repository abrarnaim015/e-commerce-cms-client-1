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
    postLoginCustomer: [],
    allDataBenner: [],
    getDataBennerById: []
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
    },
    setDataAllBenner (state, payload) {
      state.allDataBenner = payload
    },
    getDataBennerById (state, paylod) {
      state.getDataBennerById = paylod
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
      const accesstoken = localStorage.getItem('access_token')
      axios
        .get('/product', ({ headers: { access_token: accesstoken } }))
        .then(({ data }) => {
          context.commit('setDataAllProduct', data)
        })
        .catch(err => console.log(err))
    },
    createProduct (context, dataCreate) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.post('/product', dataCreate, ({ headers: { access_token: accesstoken } }))
    },
    findDataProductById (context, id) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.get(`/product/${id}`, ({ headers: { access_token: accesstoken } }))
    },
    getdataEdit (context, data) {
      context.commit('getDataProductById', data)
    },
    editDataProduct (context, dataEdit) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.put(`/product/${dataEdit.id}`, dataEdit, ({ headers: { access_token: accesstoken } }))
    },
    deleteDataProduct (context, id) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.delete(`/product/${id}`, ({ headers: { access_token: accesstoken } }))
    },
    getAllBenner (context) {
      const accesstoken = localStorage.getItem('access_token')
      axios
        .get('/banner', ({ headers: { access_token: accesstoken } }))
        .then(({ data }) => {
          context.commit('setDataAllBenner', data)
        })
        .catch(err => console.log(err))
    },
    createBenner (context, dataCreate) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.post('/banner', dataCreate, ({ headers: { access_token: accesstoken } }))
    },
    deleteDataBenner (context, id) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.delete(`/banner/${id}`, ({ headers: { access_token: accesstoken } }))
    },
    findDataBenner (context, id) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.get(`/banner/${id}`, ({ headers: { access_token: accesstoken } }))
    },
    getDataEditBenner (context, data) {
      context.commit('getDataBennerById', data)
    },
    editDataBenner (context, dataEdit) {
      const accesstoken = localStorage.getItem('access_token')
      return axios.put(`/banner/${dataEdit.id}`, dataEdit, ({ headers: { access_token: accesstoken } }))
    }
  },
  modules: {
  }
})
