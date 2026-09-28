class Person {
    constructor(name) { this.name = name; }
    sayHello() { console.log("Hi, I am " + this.name); }
}

class Student extends Person {
    code() { console.log(this.name + " is coding."); }
}

const student = new Student("Winston");
student.sayHello();
student.code();