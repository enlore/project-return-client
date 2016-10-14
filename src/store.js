import state from './store/state.js'

import Vue from 'vue'
import Vuex from 'vuex'

import { fetchCriteria, fetchOpps } from './store/actions.js'
import { SET_CRITERIA }from './store/mutations.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    actions: {
        fetchCriteria,
        fetchOpps
    },

    mutations: {
        SET_CRITERIA
    }
})

export default store
