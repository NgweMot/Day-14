// function triangle(){
//     console.log("*");
//     console.log("**");
//     console.log("***");
//     console.log("****");

// };
// triangle();
// triangle();
// triangle();
// function InchesToFeet(inches=0){
//     // let inches = 60;
//     console.log(inches);
//     let resultFeet = inches/12;
//     return resultFeet + "ft";

// }
// console.log(InchesToFeet(60));
// console.log(InchesToFeet(120));
// console.log(InchesToFeet(90));
// console.log(InchesToFeet());
// let results=[];
// let count =0;
// function calArea(width,breadth){
//     let resultArea=width*breadth;
//     let areaUnit = "sqft";
//     let area = resultArea + areaUnit ;
//     let resultObj={
//         width :width + "ft",
//         breadth:breadth + "ft",
//         area,
//     };
//     results[count++]=resultObj;
//     return area;
// }
// console.log(calArea(70,20));
// console.log(calArea(12,60));
// console.log(calArea(20,60));
// console.table(results);

// let rates={
//     usd :2100,
//     eur:2200,
//     sgd:1500,
// };
// from 100 usd to mmk
// function exchangeToMMK(amount,fromCurrency){
// let currentExchangeRate = rates[fromCurrency];
// let resultAmount = amount * currentExchangeRate;
// return resultAmount + "MMK"
// };
// console.log(exchangeToMMK(100,"usd"));
// console.log(exchangeToMMK(80,"eur"));
// console.log(exchangeToMMK(200,"sgd"));

// 500000mmk to usd
// function exchangeToCurrency(amount,ToCurrency){
//     let currentExchangeRate = rates[ToCurrency];
//     let resultAmount = amount / currentExchangeRate;
//     return resultAmount + " " + ToCurrency;
//     };
//     console.log(exchangeToCurrency(500000,"usd"));
//     console.log(exchangeToCurrency(400000,"eur"));
//     console.log(exchangeToCurrency(210000,"sgd"));

//     let morning=6;
//     let evening=4;
//     console.log(false ? "morning":"evening");
//     console.log(morning>evening ?"မနက်":"ညနေ");
    
// console.log(false?"I like coffee":"I like tea");
// console.log(true?"beautiful":"ugly");
// let x = function(){
//     console.log("*");
//     console.log("**");
//     console.log("***");
   
// };
// console.log(x());

// (function(){
//     console.log("*");
//     console.log("**");
//     console.log("***");
// })();
// let y = function(){
//     return y;
// }
// {
//     let y = 5;
//     const z =10;
//     console.log(y);
//     console.log(z);
// }
var z=15;
var a=1;

function run(){
    console.log(z);
    console.log(a,z);

}
console.log(run());
console.log(z);



    








