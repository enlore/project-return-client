/* global laxcomma:true */
import { getCriteria, getOpps } from '../ajax.js'

export function fetchCriteria (ctx) {
    console.info("fetch it")

    getCriteria((err, criteria) => {

        ctx.commit("SET_CRITERIA", criteria)
        ctx.commit("SET_ABILITIES", criteria.actions)
        ctx.commit("SET_INDUSTRIES", criteria.industries)
        ctx.commit("SET_CONVICTIONS", criteria.convictions)
    })
}

export function fetchOpps (ctx) {
    console.info("fetch opps")

    getOpps((err, opps) => {
        console.info(opps)
    })
}
