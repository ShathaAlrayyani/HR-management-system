`use strict`;

let allEmployees =[];
let form = document.getElementById("form");

function employee (fullName ,department ,level,imageUrl){
    this.employeeId= this.getId();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = imageUrl;
    this.salary= this.getSalary ();
    allEmployees.push(this);

}

employee.prototype.getSalary = function () {
    let salary = 0;
    switch(this.level){
        case "junior":
           salary = Math.floor(Math.random() * (1000 - 500) ) + 500;
            break;
        case "mid-senior" :
            salary = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
            break;
        case "senior" :
            salary = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
            break;
    }
    return salary;

  }
let id = 999;
employee.prototype.getId = function (){
    id++ ;
    return id;

}

employee.prototype.render = function(){
    document.write(`<p> ${this.fullName} ${this.salary}</p>`)
}

 
let ghazi = new employee("Ghazi Samer","Administration","senior",".\img\man.webp");
let lana = new employee ("lana Ali","Finance","senior",".\img\woman.jpg");
let tamara = new employee ("Tamara Ayoub","Marketing","senior","./img/woman.jpg");
let safi = new employee("Safi Walid","Administration","mid-senior","./img/woman.jpg");
let omar = new employee ("Omar Zaid","Development","senior", ".\img\man.webp");
let rana = new employee ("Rana Saleh","Development","junior",".\img\woman.jpg");
let hadi = new employee ("Hadi Ahmad","Finance","mid-senior",".\img\man.webp");


ghazi.render();
lana.render();
tamara.render();
safi.render();
omar.render();
rana.render();
hadi.render();





form.addEventListener('submit',saveData);

function saveData (event) {
    event.preventDefault();
    console.log(event.target.fname.value);
    let name = event.target.fname.value;
    let image = event.target.img.value;
    let department = event.target.department.value ; 
    let level = event.target.level.value;
    console.log(name , image , department , level);

    newEmployee = new employee (name,department,level,image);

}
console.log(allEmployees);