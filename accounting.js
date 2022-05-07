`use strict`
let table = document.getElementById("tableId");
let company = [];

function company1 (departmentName ,employeeNum,totalSalary,avgSalary){

    this.departmentName = departmentName;
    this.employeeNum = m;
    this.totalSalary = imageUrl;
    this.avgSalary = this.totalSalary/this.employeeNum ;

    company.push(this);


}

function getData1 (){
    let gittingData =localStorage.getItem("employee");
    console.log(gittingData);
    // convert the data to its original type not a string
    let employeeSalary = JSON.parse(gittingData);
    console.log(employeeSalary);
     
    let totDevelopment =[];
    let totFinance =[];
    let totMarketing=[];
    let totAdministration =[];
    
    for(let i=0 ; i < originalData.length ; i++){
       // originalData[i].salary; 
        switch (originalData[i].department){
            case "development":
                totDevelopment.push(employeeSalary[i].salary)
                break;
            case "finance":
                totFinance.push(employeeSalary[i].salary)
                break;
            case "administration" :
                totAdministration.push(employeeSalary[i].salary)
                break;
            case "marketing" :
                totMarketing.push(employeeSalary[i].salary)
                break;
        }
    }      
}
