export async function requestGet(url) {
    return await modifiableRequest(url, 'GET')
}

export async function requestPost(url = '', data = {}) {
    return await modifiableRequest(url, 'POST', data)
}

export async function requestDelete(url = '', data = {}) {
    return await modifiableRequest(url, 'DELETE', data)
}

async function modifiableRequest(url = '', method = 'GET', data = null) {
    const headers = {
        method, // *GET, POST, PUT, DELETE, etc.
        // mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        }
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer' // no-referrer, *client
    }
    if (data) {
        headers.body = JSON.stringify(data)
    }
    // Default options are marked with *
    const response = await fetch(url, headers)
    return await response.json() // parses JSON response into native JavaScript objects
}