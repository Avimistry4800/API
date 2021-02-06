const normalPerson = {
    firstname: 'Robin',
    lastName: 'Uddin',
    salary: 15900,

    getFullName: function () {
        console.log(this.firstname, this.lastName);
    },
    chirgeBill: function (amount,tips,tax) {
        console.log(this);
        this.salary = this.salary - amount - tips -tax;
        return this.salary;

    }

}
const firendlyPerson = {
    firstname: 'Pranto',
    lastName: 'Mondol',
    salary: 24000 ,
}
// const firendlyPersonCharge = normalPerson.chirgeBill.bind(firendlyPerson);

// firendlyPersonCharge(1312);
// firendlyPersonCharge(1320);
// console.log(firendlyPerson.salary);

const heroPerson = {
    firstname: 'Hero',
    lastName: 'Mahabub',
    salary: 54000 ,
}


// const heroPersonCharge = normalPerson.chirgeBill.bind(heroPerson);
// heroPersonCharge(1245);
// heroPersonCharge(312);
// heroPersonCharge(4320);
// console.log(heroPerson.salary);

// normalPerson.chirgeBill.call(heroPerson,2346,1236,245);
// console.log(heroPerson.salary);


normalPerson.chirgeBill.apply(heroPerson,[2300,345,370]);
console.log(heroPerson.salary);