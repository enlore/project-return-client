/* global laxcomma:true */
import { getCriteria, getOpps } from '../ajax.js'

export function fetchCriteria (ctx) {
    console.info("fetch it")

    getCriteria((err, criteria) => {

        ctx.commit("SET_CRITERIA", criteria)
    })
}

export function fetchOpps (ctx) {
    console.info("fetch opps")

    getOpps((err, opps) => {
        console.info(opps)
    })
}
