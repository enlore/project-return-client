import state from './store/state.js'

import Vue from 'vue'
import Vuex from 'vuex'

import { fetchCriteria } from './store/actions.js'
import mutations from './store/mutations.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    actions: {
        fetchCriteria: fetchCriteria,
        fartHarder: () => { console.log("woo") }
    },
    mutations
})

export default store
