class Trip {
    constructor(riderId, cabId, from, to, tripId, price) {
        this.riderId = riderId;
        this.cabId = cabId;
        this.from = from;
        this.to = to;
        this.status = 'inprogress';
        this.tripId = tripId;
        this.price = price;
    };


    set setStatus(newStatus) {
        this.status = newStatus;
    }

    
}


module.exports = {
    Trip
}