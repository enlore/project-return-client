import _ from 'lodash'
import superagent from 'superagent'

//const domain = "http://192.168.1.75"
const domain = "http://107.170.48.47"

const paths = {
    opps: `${domain}/opportunities`,
    oppsQuery: `${domain}/opportunities/search`,
    criteria: `${domain}/opportunities/criteria`
}

function handleAPIException (err) {
    console.error(err)
}

function handleError (err) {
    console.error(err)
}

export function getOpps (cb) {
    superagent.get(paths.opps)
        .end((err, resp) => {
            if (err) handleError(err)
            if (resp.body.exception) handleAPIException(resp.body.exception)
            else return cb(null, resp.body.data)
        })
}

export function getCriteria (cb) {
    superagent.get(paths.criteria)
        .end((err, resp) => {
            if (err) handleError(err)
            if (resp.body.exception) handleAPIException(resp.body.exception)
            else return cb(null, _.mapValues(resp.body.data, (criterionGroup) => _.keys(criterionGroup)))
        })
}
