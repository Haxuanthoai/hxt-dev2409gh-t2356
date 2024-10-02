//Toán tử, toán hạng, biểu thức, câu lệnh, khối lệnh
//1. Toán tử số học: *,/,+,-,%
var num1, num2;
//gán giá trị 
num1 = 12;
num2 = 25;

//thực hiện các phép tính toán số học
res = num1 * num2;
console.log(num1, "*", num2, "=", res);
res = num1 / num2;
console.log(num1, "/", num2, "=", res);
res = num1 + num2;
console.log(num1, "+", num2, "=", res);
res = num1 - num2;
console.log(num1, "-", num2, "=", res);
res = num1 % num2;
console.log(num1, "%", num2, "=", res);


//2. Phép toán so sánh => trả về giá trị kiểu boolean (true/flase)
// >, >=, <=, ==, ===, !=; !==

res = num1 > num2;
console.log(num1, ">", num2,"=>",res);
res = num1 >= num2;
console.log(num1, ">=", num2,"=>",res);
res = num1 < num2;
console.log(num1, "<", num2,"=>",res);
res = num1 <= num2;
console.log(num1, "<=", num2,"=>",res);
res = num1 == num2;
console.log(num1, "==", num2,"=>",res);
res = num1 === num2;
console.log(num1, "===", num2,"=>",res);

num1=12;
num2="12";
res = num1 == num2;
console.log(num1, "==", num2,"=>",res);
res = num1 === num2;
console.log(num1, "===", num2,"=>",res);

//toán tử logic (and &&; or ||; not !)

num1=12;
num2=15;

res = (num1>10) && (num2<10);
console.log("num1>10 && (num2<10)=>",res);
res = (num1>10) || (num2<10);
console.log("num1>10 && (num2<10)=>",res);

//4. toán tử đặc biệt
num1=12;
num2=15;

res = (num1 > 10)?"giá trị lớn hơn":"nhỏ hơn";
console.log( num1,"là",res);

//typeof
res = typeof(num1); //Number
console.log("typeof(num1):",res)

num1 = "12345";
res = typeof(num1); //String
console.log("typeof(num1):",res)