`use strict`;

let allEmployees =[];


function employee (employeeId,fullName ,department ,level,imageUrl){
    this.employeeId= employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = imageUrl;
    this.salary= this.getSalary ();
    this.netSalary = this.salary * 0.925 ;
    allEmployees.push(this)

}



employee.prototype.getSalary = function () {
    let salary = 0;
    switch(this.level){
        case "Jonior":
           salary = Math.floor(Math.random() * (1000 - 500) ) + 500;
            break;
        case "Mid-Senior" :
            salary = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
            break;
        case "Senior" :
            salary = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
            break;
    }
    return salary;

  }


employee.prototype.render = function(){
    document.write(`<p> ${this.fullName} ${this.salary}</p>`)
}

 
let ghazi = new employee(1000,"Ghazi Samer","Administration","Senior",".\img\man.webp");
let lana = new employee (1001,"lana Ali","Finance","Senior",".\img\woman.jpg");
let tamara = new employee (1002,"Tamara Ayoub","Marketing","Senior","./img/woman.jpg");
let safi = new employee(1003,"Safi Walid","Administration","Mid-Senior","./img/woman.jpg");
let omar = new employee (1004,"Omar Zaid","Development","Senior", ".\img\man.webp");
let rana = new employee (1005,"Rana Saleh","Development","Jonior",".\img\woman.jpg");
let hadi = new employee ( 1006, "Hadi Ahmad","Finance","Mid-Senior",".\img\man.webp");


ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();

console.log(allEmployees);
