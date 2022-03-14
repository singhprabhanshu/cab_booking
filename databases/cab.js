const { Location } = require('../models/location');
const { Cab } = require('../models/cab')
class CabDB {
    constructor () {
        this.cabDatabase = new Map();
    };

    getId(cabId) {
        if (this.cabDatabase.has(cabId)) {
            return this.cabDatabase.get(cabId);
        };
        return {};

    };

    createCab(cabId, name) {
        const cab = new Cab(cabId, name);
        this.cabDatabase.set(cabId, cab);
        return cab;

    };
    
    updateAvailablity(cabId, newAvailability) {
         return this.cabDatabase.get(cabId).setCabAvalablity(newAvailability);
        
    };

    updateLocation(cabId, newLocation){
        
        const cab = this.cabDatabase.get(cabId);
        
        if (cab) {
            return cab.setCabLocation(newLocation);
        }
        
        
    };

    getCabLocatoin(cabId) {
        return this.cabDatabase.get(cabId).getCabLocatoin
    }

    getAvailableCabs () {
        let availableCabs = [];
        
        for (let cab of this.cabDatabase.values()) {
            if (cab.isAvailable) {
                availableCabs.push(cab);
            }
        }
        return availableCabs;
    };

    getCabs(sx, sy, distance) {
        const cabsFound = [];

        
        const sLocation = new Location(sx, sy);
        for (let cab of this.cabDatabase.values()){

            
            if (cab.isAvailable && cab.getCabLocation().distance(sLocation) < distance) {
                cabsFound.push(cab);
            }
        };
        return cabsFound;
    };
};


module.exports = {
    CabDB,
}