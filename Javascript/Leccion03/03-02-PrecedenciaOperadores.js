//Prioridades
//(),[] L to R
//++, -- R to L
//*, /, % L to R
//+,- L to R
//>>, << L to r
//< <=, > => L to R
//==, !=, ===, !== L to R

let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / d;
console.log(z);