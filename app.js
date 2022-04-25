`use strict`;

let form = document.getElementById("form");

let allEmployees =[];


function employee (employeeId,fullName ,department ,level,imageUrl){
    this.employeeId= employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = imageUrl;
   
    allEmployees.push(this)

}



 
let ghazi = new employee(1000,"Ghazi Samer","Administration","Senior",".\img\man.webp");
let lana = new employee (1001,"lana Ali","Finance","Senior",".\img\woman.jpg");
let tamara = new employee (1002,"Tamara Ayoub","Marketing","Senior","./img/woman.jpg");
let safi = new employee(1003,"Safi Walid","Administration","Mid-Senior","./img/woman.jpg");
let omar = new employee (1004,"Omar Zaid","Development","Senior", ".\img\man.webp");
let rana = new employee (1005,"Rana Saleh","Development","Jonior",".\img\woman.jpg");
let hadi = new employee ( 1006, "Hadi Ahmad","Finance","Mid-Senior",".\img\man.webp");


console.log(allEmployees);

form.addEventListener('submit',saveData);

function saveData (event) {
    event.preventDefault();
    console.log(event.target.fname.value);
    let name = event.target.fname.value;
    let image = event.target.img.value;
    let department = event.target.department.value ; 
    let level = event.target.level.value;
    console.log(name , image , department , level);
    let employeeId = function employeeId15(){
        let employeeId = [];
        for (let i=0; i < name.length;i++){
           employeeId = Math.floor(1000 + Math.random() * 9000);
           employeeId.push({employeeId});
        }
        return employeeId;
    }

    newEmployee = new employee (employeeId,name,department,level,image);
    console.log(newEmployee);
}







