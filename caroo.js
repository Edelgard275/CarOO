//Part I
//create a class for each vehicle! Each vehicle instance should have the following properties:
//1. Make 
//2. Model
//3. Year
//Each vehicle instance should have access to methods Honk, which returns the string beep, & toString, which returns the string containing the make, model & year.

class Vehicle {
    constructor(make, model, year) {
        //set up as this.property = parameter
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep.";
    }

    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

//Part 2 
//Create a class for a Car. The Car class should inherit from Vehicle (Extend) and each car instance should have a property called numWheels, which has a value of 4.
class Car extends Vehicle {
    constructor(make, model, year) {
        //copy over from Vehicle with super for parameters
        super(make, model, year);
        //add a new property in constructor that is equal to num 4
        this.numWheels = 4;
    }
}

//Part 3 
//Create a class for a Motorcycle. This class should inherit from Vehicle & each motorcycle instance should have a property called numWheels which has a value of 2.
//It should also have a revEngine method which returns "VROOM!!!"
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOM!!!"
    }
}

//Part 4
//Create a class for a Garage. It should have a property called vehicles which will store an array of vehicles and a property called capacity which is a # indicating how many vehicles will fit in the garage. 
//When you create the Garage, vehicles will always be empty; you only need to provide the capacity.
//A Garage should also have an add method, which attemps to add a vehicle to the array of vehicles. 
//However, if you try to add something that isn't a vehicle, the garage should return the message "Only vehicles are allowed in here!"
//Also, if the Garage at capacity, it should return "Sorry, we're full."

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    //add a new method "add" with a parameter as a new Vehicle to add to the vehicles array (push onto it)
    //use an if conditional to evaluate the new Vehicle with "instanceof" against the prototype property of Vehicle to determine if it's a vehicle (boolean statement)
    //use an if condition after to evaluate if the array of current vehicles is equal to or exceeds current capacity 
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}