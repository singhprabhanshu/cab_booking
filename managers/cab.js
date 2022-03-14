const { Location } = require('../models/location')
class CabManager {
    constructor(cabDB) {
        this.cabDB = cabDB
    };

    createCab (cabId, name) {
        const cabFound = this.cabDB.getId(cabId);
        if ( Object.keys(cabFound).length == 0) {
            const cab = this.cabDB.createCab(cabId, name);
            return cab;
        }
        throw new Error('cab already exits');
        
    };

    updateLocation(cabId, x, y) {
        const cabFound = this.cabDB.getId(cabId);
        if ( Object.keys(cabFound).length != 0) {
            const newLocation = new Location(x, y);
            return this.cabDB.updateLocation(cabId, newLocation)
        }
        throw new Error('cab not found');
    }

    updateAvailablity(cabId, newAvailability) {
        const cabFound = this.cabDB.getId(cabId);
        if ( Object.keys(cabFound).length != 0) {
            return this.cabDB.updateAvailablity(cabId, newAvailability)
        }
        throw new Error('cab not found');
    }

    getCabs(sx, sy, distance) {
        
        // const cabsFound = [];
        // for (let cab in this.cabDB.values){
        //     if (cab.isAvailable && cab.getCabLocation().distance(fromPoint) < distance) {
        //         cabsFound.push(cab);
        //     }
        // };
        // return cabsFound;
        const response = this.cabDB.getCabs(sx, sy, distance);
        return response;
    };

    getAvailableCabs () {
        const availableCabs = this.cabDB.getAvailableCabs();
        return availableCabs;
    }

    
};


module.exports = {
    CabManager,
}