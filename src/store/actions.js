/* global laxcomma:true */
import { getCriteria, getOpps, postQuery } from '../ajax.js'

export function fetchCriteria (ctx) {
    console.info("fetch it")

    getCriteria((err, criteria) => {

        ctx.commit("SET_CRITERIA", criteria)
        ctx.commit("SET_ABILITIES", criteria.abilities)
        ctx.commit("SET_INDUSTRIES", criteria.industries)
        ctx.commit("SET_CONVICTIONS", criteria.convictions)
    })
}

export function fetchOpps (ctx) {
    console.info("fetch opps")

    getOpps((err, opps) => {
    })
}

export function fetchResults (ctx, query) {
    postQuery(query, (err, opps) => {
        console.info("results", opps)
        ctx.commit("SET_RESULTS", opps)
    })
}
