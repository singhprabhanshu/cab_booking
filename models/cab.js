const { Basic } = require('./common');


class Cab extends Basic {
    location;
    currentTrip;
    constructor(id, name) {
        super(id, name);
        this.isAvailable = true;
    }

    setCabAvalablity(availability) {
        this.isAvailable = availability;
    };

    setCabLocation(newLocation) {
        this.location = newLocation;
    };
    setCabCurrentTrip(currentTrip) {
        this.currentTrip = currentTrip;
    }

    getCurrentTrip() {
        return this.currentTrip;
    }

    getCabLocation() {
        return this.location;
    }

    getCabAvailability() {
        return this.isAvailable;
    }
}

module.exports = {
    Cab
}

