const { CabManager } = require("./cab");
const { Trip } = require('../models/trip');
const { Rider } = require("../models/rider");
const { Location } = require("../models/location");
class TripManager {
    constructor(tripDB, cabManager) {
        this.tripDB = tripDB;
        this.CabManager = cabManager;
        this.MAX_ALLOWED_TRIP_MATCHING_DISTANCE = 10.0;
    }
    
    createTrip(riderId, sx, sy, dx, dy, tripId, price) {
        console.log('check1');
        const closeAvailableCabs = this.CabManager.getCabs(sx, sy, this.MAX_ALLOWED_TRIP_MATCHING_DISTANCE);
        console.log('available cabs', closeAvailableCabs);
        const selectedCab = closeAvailableCabs[0];
        console.log(selectedCab);
        const sLocation = new Location(sx, sy);
        const dLocation = new Location(dx, dy);
        // const trip = new Trip(riderId, selectedCab.id, sLocation, dLocation, tripId, price);
        const trip = this.tripDB.createTrip(selectedCab.id, riderId, sLocation, dLocation, tripId, price );
        this.CabManager.updateAvailablity(selectedCab.id, false);
        return trip;


    };
    endTrip
};


module.exports = {
    TripManager,
}