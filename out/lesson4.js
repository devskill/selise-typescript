// interface IPerson {
//     name: string;
//     gender: string;
// }
// interface IEmployee extends IPerson {
//     empCode: number;
// }
// let empObj:IEmployee = {
//     empCode:1,
//     name:"Bill",
//     gender:"Male"
// }
// console.log(empObj.name);
// interface IEmployee {
//     empCode: number;
//     name: string;
//     getSalary:(number)=>number;
// }
// class Employee implements IEmployee { 
//     empCode: number;
//     name: string;
//     constructor(code: number, name: string) { 
//                 this.empCode = code;
//                 this.name = name;
//     }
//     getSalary(empCode:number):number { 
//         return 20000;
//     }
// }
// function printSalary(emp : IEmployee)
// {
//     console.log(emp.getSalary(1));
// }
// let emp = new Employee(1, "Steve");
// printSalary(emp);
// class DemoCounter {
//     static counter : number = 0;
//     name : string = "";
//     increament(name: string) : void {
//         DemoCounter.counter++;
//         this.name = name;
//     }
//     static doSoemthing(): void{
//         console.log("printing from static method");
//     }
// }
// let demoCounter : DemoCounter = new DemoCounter();
// let demoCounter2 : DemoCounter = new DemoCounter();
// demoCounter.increament("x");
// demoCounter.increament("y");
// demoCounter2.increament("z");
// console.log(DemoCounter.counter);
// console.log(demoCounter.name);
// console.log(demoCounter2.name);
// DemoCounter.doSoemthing();
// abstract class Department {
//     constructor(public name: string) {}
//     printName(): void {
//       console.log("Department name: " + this.name);
//     }
//     abstract printMeeting(): void; // must be implemented in derived classes
//   }
//   class AccountingDepartment extends Department {
//     constructor() {
//       super("Accounting and Auditing"); // constructors in derived classes must call super()
//     }
//     printMeeting(): void {
//       console.log("The Accounting Department meets each Monday at 10am.");
//     }
//     generateReports(): void {
//       console.log("Generating accounting reports...");
//     }
//   }
//   let department: Department; // ok to create a reference to an abstract type
//   //department = new Department(); // error: cannot create an instance of an abstract class
//   department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
//   department.printName();
//   department.printMeeting();
//   //department.generateReports(); // error: method doesn't exist on declared abstract type
//   interface ITransport {
//   }
//   abstract class Vehicle {}
//   class Airplane extends Vehicle {}
//   class Bus extends Vehicle {}
//   class Member {}
//   class VipMember extends Member{}
function identity(arg) {
    return arg;
}
console.log(identity("hello"));
var output = identity(123);
//# sourceMappingURL=lesson4.js.map