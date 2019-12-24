var a = prompt("Enter a:", 0);
var b = prompt("Enter b:", 0);
var c = prompt("Enter c:", 0);

if((a*a + b*b == c*c) || (a*a + c*c == b*b) || (b* + c*c == a*a)) {
    alert("Right triangle");
} else if(( a == b ) && ( a==c )) {
    alert("Equilateral triangle");
} else if(( a == b ) || ( b ==c )||( a==c )) {
    alert("Isosceles triangle");
} else {
    alert("Ordinary triangle");
}
