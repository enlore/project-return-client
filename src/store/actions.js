import { getCriteria } from '../ajax.js'

export function fetchCriteria (ctx) {
    console.info("fetch it")
    getCriteria((err, criteria) => {
        ctx.commit("SET_CRITERIA", criteria)
    })
}
