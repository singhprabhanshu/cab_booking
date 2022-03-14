const { Rider } = require("../models/rider");
class RiderDB {
    constructor() {
        this.RiderDatabase = new Map();
    }

    createRider(riderId, name) {
        const rider = new Rider(riderId, name);
        this.RiderDatabase.set(riderId, rider);
        return rider;
    };

    getRider(riderId) {
        return this.RiderDatabase.get(riderId);
    }
}


module.exports = {
    RiderDB
}