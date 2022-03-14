
class RiderManager {
    constructor(riderDB) {
        this.riderDB = riderDB;
    };

    createRider (riderId, name) {
        if ( this.riderDB.getRider(riderId)) {
            throw new Error("Rider already exists");
        }
        const rider = this.riderDB.createRider(riderId, name);
        return rider;
    };



}


module.exports = {
    RiderManager
}