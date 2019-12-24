var a = prompt("Enter a:", 1);
if(!parseInt(a, 10)) {
    alert('Invalid input data');
}
var b = prompt("Enter b:", 1);
if(!parseInt(b, 10)) {
    alert('Invalid input data');
}
var c = prompt("Enter c:", 1);
if(!parseInt(c, 10)) {
    alert('Invalid input data');
}
var x1;
var x2;
if( a == 0 ) {
   console.log('a cannot be equal to 0');
}
let D = b * b - 4 * a * c;
console.log('D = ' + D);
if( D < 0 ) {
    console.log('no solution (when Discriminant < 0)');
}
if( D == 0 ) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    if ( x1 == 0) {
        console.log('x = 0');
    }
} else if( D > 0 ){
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    if(x1 != 0 || x2 != 0) {
        console.log('x1 = ' + x1);
        console.log('x2 = ' + x2);
    }
    if( x1 == 0) {
        console.log('x1 = 0');
    }
    if( x2 == 0) {
        console.log('x2 = 0');
    }
}
