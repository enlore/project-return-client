import OppForm from './opportunity-form.vue'
import OppSummary from './result-summary.vue'
import OppDetail from './result-detail.vue'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: "/",
        component: OppForm
    },
    {
        path: "/results",
        component: OppSummary
    },
    {
        path: "/opporunity/:id",
        component: OppDetail
    }
]

const router = new Router({
    routes
})

export default router
