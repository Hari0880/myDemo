
function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.describe = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
};


function Student(name, age, graded) {
    
    Person.call(this, name, age);
    this.graded = graded;
}


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.study = function() {
    return `${this.name} is studying for grade ${this.graded}.`;
};


let student1 = new Student("John", 30, "A");
let student2 = new Student("Alice", 22, "B");


console.log(student1.describe()); 
console.log(student1.study());   
console.log(student2.describe());
console.log(student2.study());    
