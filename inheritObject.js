let Car = {
    make: "Honda",
    model: "honda z1",
    year: "2002",

    getDetails() {
        console.log("make " + this.make + " model " + this.model + " year " + this.year);
    }
};

let ElectricCar = {
    batterCap: "5kwMAH",
    getBatteryInfo() {
        console.log("batteryCapacity " + this.batterCap);
    }
};


Car.__proto__ = ElectricCar;


Car.getDetails();       
Car.getBatteryInfo();   

