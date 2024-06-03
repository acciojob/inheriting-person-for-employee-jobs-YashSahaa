// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function () {
	console.log("Hello, my name is "+this.name+" I am "+this.age+" years old.")
}
function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
	this.jobTitle = jobTitle;
}
// Employee.prototype.greet = function() {
//     Person.prototype.greet.call(this);
// }
Employee.prototype = Object.create(Person.prototype);

Employee.prototype.jobGreet = function () {
	console.log("Hello, my name is "+this.name+" I am "+this.age+" years old.")
}
	//Object.setPrototypeOf(Person.prototype,Employee.prototype);
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

const person = new Person("Alice",25);
person.greet();
const employee = new Employee("Bob",30);
employee.greet();
employee.jobGreet();