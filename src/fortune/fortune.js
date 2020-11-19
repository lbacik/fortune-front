
const fetch = require('node-fetch')

class Fortune {

    constructor(fortuneUrl) {
        this.fortuneUrl = fortuneUrl
    }

    get() {
        return fetch(this.fortuneUrl)
            .then(response => response.json())
            .then(response => response.fortune)
    }
}

module.exports = Fortune
