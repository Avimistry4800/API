class person {
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName =lastName;
        this.salary = salary;
    }
}

const heroPerson = new person ('hero' , 'Balam' , 36980);
console.log(heroPerson);
const friendlyPerson = new person ('Pranto' , 'Mondol' , 43242);
console.log(friendlyPerson);