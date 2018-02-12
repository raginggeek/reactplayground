const ENDPOINT = 'http://dashboard.aesir.net/world/json'

export function getProfiles() {
    return fetch(ENDPOINT)
        .then(res => res.json())
        .catch(err=> {
            console.log(err);
        })
}