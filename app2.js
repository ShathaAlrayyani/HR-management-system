this.salary = function () {
    switch( salary ){
        case this.level == "Jonior":
            Math.floor(Math.random() * (1000 - 500) ) + 500;
            break;
        case this.level == "Mid-Senior" :
            salary = Math.floor(Math.random() * (1500 - 1000) ) + 1000;
            break;
        case this.level == "Senior" :
            salary = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
            break;
    }
    return salary ;
  }
  