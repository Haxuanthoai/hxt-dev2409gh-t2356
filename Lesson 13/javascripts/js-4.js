// cấu trúc điều khiển if
// dạng 1: if đơn
/*
cú pháp:
if(condition-expression){
    block statement;
}
 */
//vd: cho số num; kiểm tra số num có là số dương
num = 10;
if(num > 0){
    console.log(num, "là số dương");
}
//nếu num > 0 thì gán lại giá trị num = -100
if(num > 0){
    num = -100;
    console.log(num);
}

// dang 2: if ... else
num = 13;
// kiểm tra xem số num là chẵn hay  lẻ
if(num % 2 == 0){
    console.log(num, "là số chẵn");
}else{
    console.log(num,"là số lẻ")
}

// dạng 3: if bậc thang; if ... else if...
// kiểm tra số num là sô dương, âm hay số 0
num = -11;
if(num > 0){
    console.log(num, "là số dương");

}else if(num < 0){
    console.log(num,"là số âm");
}else{
    console.log(num,"là không");
}

//dạng 4: nested if
num1 = 12;
num2 = 15;
//nếu num 1 là chẵn, kiểm tra num 2 là số lẻ thù tính : res = num1 + num2
if(num1 % 2 ==0){
    if(num2 % 2 == 1){
        res = num1 + num2;
        console.log(res);
    }
}
// luyện tập 1: gpt bậc 1: ax+b=0

a = 5;
b = 10;
if(a === 0){
    if(b === 0){
        console.log("phương trình vô số nghiệm");
    }else{
        console.log("phương trình vô nghiệm");
    }
}else{
    x= -b/a;
    console.log("nghiệm của phương trình là:" ,x)
}

// Luyện tập 2: gpt bậc 2: ax^2+bx+c=0
