const { Trip } = require("../models/trip");

class TripDB {
    constructor() {
        this.tripDatabase = new Map();
        
    };

    getTrip (riderId) {
        return this.tripDatabase.get(riderId);
    }

    createTrip (cabId, riderId, from, to, tripId, price) {
        const tripAvailable = this.getTrip(riderId);
        const trip = new Trip(riderId, cabId, from, to, tripId, price)
        if (tripAvailable) {
            tripAvailable.push(trip);
            this.tripDatabase.set(riderId, tripAvailable);
            
        } else {
            this.tripDatabase.set(riderId, [trip])
        }
        console.log(this.tripDatabase);
        return this.tripDatabase.get(riderId);
        
    }
}


module.exports = {
    TripDB
}