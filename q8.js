
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}


Car.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};


let myCar = new Car("Honda", "Civic", 2020);


console.log(myCar.getDetails()); 

Car.prototype.getCarInfo = function() {
    return `${this.make} ${this.model} (${this.year})`;
};


console.log(myCar.getCarInfo()); 


myCar.__proto__ = {
    getCustomInfo: function() {
        return `Custom Info: ${this.make} ${this.model}`;
    }
};

console.log(myCar.getCustomInfo()); 
