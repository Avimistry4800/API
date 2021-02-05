const normalPerson = {
    firstname : 'Robin',
    lastName : 'Uddin',
    salary : 15900,

    getFullName : function () {
    console.log(this.firstname, this.lastName)        
    },
    chirgeBill : function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
        
    }
    
}

normalPerson.chirgeBill(180);
console.log(normalPerson.salary);