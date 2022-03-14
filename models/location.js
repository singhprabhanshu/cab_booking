class Location {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };

    distance(location) {
        console.log(this.x, this.y, location, 'checking again');
        return Math.sqrt(Math.pow((this.x - location.x), 2) + Math.pow((this.y - location.y), 2));
    }
}

module.exports = {
    Location
}

