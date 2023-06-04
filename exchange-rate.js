let rates={
    usd :2100,
    eur:2268,
    sgd:1560,
    thb:61,
 
};
// Exchange rate of currency
function AnyCurrency(amount,fromCurrency,toCurrency){
    let MMKCurrency = amount*rates[fromCurrency];
    let ExchangeRate = MMKCurrency/rates[toCurrency];
    return ExchangeRate +toCurrency;
};
console.log(AnyCurrency(100,"usd","eur"));
console.log(AnyCurrency(1000,"usd","thb"));
console.log(AnyCurrency(150000,"sgd","sgd"));
console.log(AnyCurrency(300000,"thb","usd"));







