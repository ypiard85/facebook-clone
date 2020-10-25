import Vue from 'vue'
import Vuex from 'vuex'
import {FacebookService} from '@/service/facebook.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    text: null,
    image: null,
    datetime: new Date()
  },

  getters:{
    getPost(state){
      const facebookgetpost = FacebookService.getPost()
      state.posts = facebookgetpost
      return facebookgetpost
    },
  },

  mutations: {
   
    
  },

  actions: {

  },

  modules: {

  }
})
