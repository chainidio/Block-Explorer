import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        epochBeginning:"",
        api:'http://138.68.60.249:6789/bcid?',
        apiText:'BCID'
    }
})
