var name = 'Kuddus';
function add(number1 , number2) {
    var reasult = number1 + number2;
    console.log('name inside', name);
    return reasult;

}

var sum = add(23,65);
console.log(sum);
console.log('name outside', name);