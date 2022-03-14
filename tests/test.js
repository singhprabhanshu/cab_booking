const { CabDB } = require('../databases/cab');
const { TripDB} = require('../databases/trip');
const { RiderDB } = require('../databases/rider');
const { CabManager } = require('../managers/cab');
const { TripManager } = require('../managers/trip');
const { RiderManager } = require('../managers/rider');

class Tests {
    constructor() {
        this._cabDB = new CabDB();
        this._cabService = new CabManager(this._cabDB);
        this._tripDB = new TripDB();
        this._riderDB = new RiderDB();
        this._tripService = new TripManager(this._tripDB, this._cabService);
        this._riderService = new RiderManager(this._riderDB);
    }

    startTest () {
        // creating cab with cabId c1 and name car1
        const newCab1 = this._cabService.createCab('c1', 'car1');
        const newCab2 = this._cabService.createCab('c2', 'car2');
        const newCab3 = this._cabService.createCab('c3', 'car3');
        const newCab4 = this._cabService.createCab('c4', 'car4');
        

        // creating rider with riderId and name
        this._riderService.createRider('r1', 'rider1');
        this._riderService.createRider('r2', 'rider2');
        this._riderService.createRider('r3', 'rider3');
        this._riderService.createRider('r4', 'rider4');
        

        // updating cab location

        this._cabService.updateLocation('c1', 1.0, 1.0);
        
        this._cabService.updateLocation('c2', 2.0, 2.0); //na
        
        this._cabService.updateLocation('c3', 3.0, 3.0);
        
        this._cabService.updateLocation('c4', 101.0, 101.0); //na
        // this._cabService.updateLocation('c5', 4.0, 4.0);
        const cabs = this._cabService.getAvailableCabs();
        
        this._tripService.createTrip('r1', 0.0, 0.0,100.0, 100.0, 't1', 100);
        console.log(this._cabDB.cabDatabase);

        this._tripService.createTrip('r2', 0.0, 0.0,100.0, 100.0, 't1', 100);
        this._tripService.createTrip('r2', 1.0, 1.0,100.0, 100.0, 't1', 100);
        console.log(this._cabDB.cabDatabase, this._tripDB.tripDatabase);


        
    }
};


const test = new Tests();
test.startTest();