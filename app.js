`use strict`


let allEmployees =[];
let form = document.getElementById("form");
let card = document.getElementById("div");
let body = document.getElementById("body");

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
    // creat the card 
    let container = document.createElement("div");
    container.classList.add("container");
    // image 
    let employeeImage = document.createElement("img")
    employeeImage.setAttribute("src",this.image);
    container.appendChild(employeeImage);
    // adding emplyee name & Id:
    let employeeName = document.createElement("h3");
    employeeName.textContent =  `Name : ${this.fullName} - ID : ${this.employeeId}` ; 
    container.appendChild(employeeName);

    // adding employee Dep + level 
    let employeeDep = document.createElement("h3");
    employeeDep.textContent =  `Deperatment : ${this.department} - Level : ${this.level}` ; 
    container.appendChild(employeeDep);

    // adding salary 
    let employeeSalary = document.createElement("h3");
    employeeSalary.textContent = this.salary ; 
    container.appendChild(employeeSalary);

    card.appendChild(container);

    
}

 
let ghazi = new employee("Ghazi Samer","Administration","senior","task/Ghazi.jpg");
let lana = new employee ("lana Ali","Finance","senior","./task/Lana.jpg");
let tamara = new employee ("Tamara Ayoub","Marketing","senior","./task/Tamara.jpg");
let safi = new employee("Safi Walid","Administration","mid-senior","./task/Safi.jpg");
let omar = new employee ("Omar Zaid","Development","senior", "./task/Omar.jpg");
let rana = new employee ("Rana Saleh","Development","junior","./task/Rana.jpg");
let hadi = new employee ("Hadi Ahmad","Finance","mid-senior","./task/Hadi.jpg");

function renderAll (){
    for (let i = 0 ;i<allEmployees.length;i++){

        allEmployees[i].render();
    }

}




form.addEventListener("submit", saveData);

function saveData(event){
    
    event.preventDefault();
    console.log(event);
    console.log(event.target.fname.value);
    let name = event.target.fname.value;
    let image = event.target.img.value;
    let department = event.target.department.value ; 
    let level = event.target.level.value;

    console.log(name , image , department , level);

    newEmployee = new employee (name,department,level,image);
    newEmployee.render();
    saveLocal(allEmployees);

}

//save to local storage:
function saveLocal(data){
    let stringObj= JSON.stringify(data)
    localStorage.setItem("employee",stringObj);
}

// get the data from local storage 
function getData (){
    let gittingData =localStorage.getItem("employee");
    console.log(gittingData);
    // convert the data to its original type not a string
    let originalData = JSON.parse(gittingData);
    console.log(originalData);

    if (originalData!= null){
        for(let i=0 ; i < originalData.length ; i++){
       var element = new employee(
           originalData[i].department ,
           originalData[i].employeeId ,
           originalData[i].fullName ,
           originalData[i].image ,
           originalData[i].level,
           originalData[i].salary); 
       }      
    }

    element.render();

}


renderAll();
console.log(allEmployees);
getData();



// styling :
body.style.backgroundColor = "#EED6C4" ;

//style the form :
form.style.backgroundColor = "#6B4F4F" ;
form.style.width = "300px";
form.style.padding = '16px';
form.style.fontSize = "11px";
form.style.borderColor = "#EED6C4";
form.style.borderBlock = "12px";


card.style.margin
card.style.textAlign = "center";
card.style.borderImageWidth = "15px";

card.style.padding = "15px";
card.style.fontSize = "11px"
card.style.marginBlock = "22px";
card.style.display ="flex";
card.style.flexWrap = "wrap";
card.style.justifyContent = "space-evenly";