const { Basic } = require('./common');

class Rider extends Basic {
    constructor(riderId, name) {
        super(riderId, name);
    }
}

module.exports = {
    Rider
}