// complete this js code
class Person {
  constructor(name, age) {
    // Initialize properties
	  this.name = name;
 	  this.age = age;
  }

  greet() {
    // Return greeting
	  console.log("Hello, my name is "+this.name+" I am "+this.age+" years old.");
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    // Call the Person constructor
	  super(name,age);
    // Initialize jobTitle
	  this.jobTitle = jobTitle;
  }

  jobGreet() {
    // Return job greeting
	  console.log("Hello, my name is "+this.name+" I am "+this.age+" years old, and my job title is "+this.jobTitle+".");
  }
}


// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }
// Person.prototype.greet = function () {
// 	console.log("Hello, my name is "+this.name+" I am "+this.age+" years old.")
// }
// function Employee(name, age, jobTitle) {
// 	Person.call(this,name,age);
// 	this.jobTitle = jobTitle;
// }
// // Employee.prototype.greet = function() {
// //     Person.prototype.greet.call(this);
// // }
// Employee.prototype = Object.create(Person.prototype);

// Employee.prototype.jobGreet = function () {
// 	console.log("Hello, my name is "+this.name+" I am "+this.age+" years old, and my job title is "+this.jobTitle+".")
// }
// 	//Object.setPrototypeOf(Person.prototype,Employee.prototype);
// // Do not change code below this line
window.Person = Person;
window.Employee = Employee;

// const person = new Person("Alice",25);
// person.greet();
// const employee = new Employee("Bob",30,"mana");
// employee.greet();
// employee.jobGreet();