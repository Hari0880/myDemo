function Student(name, grade) {
    this.name = name;   
    this.grade = grade; 
    
    this.study = function() {
        console.log(this.name + " is studying.");
    };
    
    this.getGrade = function() {
        return this.grade;
    };
}


let student1 = new Student("Hari", "A");
let student2 = new Student("Harshith", "B");
let student3 = new Student("hari2", "C");


student1.study(); 
student2.study(); 
student3.study(); 
console.log(student1.getGrade())