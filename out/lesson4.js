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
var DemoCounter = /** @class */ (function () {
    function DemoCounter() {
        this.name = "";
    }
    DemoCounter.prototype.increament = function (name) {
        DemoCounter.counter++;
        this.name = name;
    };
    DemoCounter.doSoemthing = function () {
        console.log("printing from static method");
    };
    DemoCounter.counter = 0;
    return DemoCounter;
}());
var demoCounter = new DemoCounter();
var demoCounter2 = new DemoCounter();
demoCounter.increament("x");
demoCounter.increament("y");
demoCounter2.increament("z");
console.log(DemoCounter.counter);
console.log(demoCounter.name);
console.log(demoCounter2.name);
DemoCounter.doSoemthing();
//# sourceMappingURL=lesson4.js.map