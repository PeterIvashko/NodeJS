const bool = true; 

const obj = {};

if(obj.home === 'Kyiv') {
    
} else {

}

const arr = [];

for(let index = 0; index < arr.length - 1; index += 1) {
    
}

for(let index = arr.length; index >= 0; index = index - 1) {
    
}

let some = 5;

some = "five";

const transactions = [];

transactions.push({
    name: "coffee",
    price: 300,
    currency: "UAH"
});

transactions.push({
    name: "cookies",
    price: 50,
    currency: "UAH"
});

transactions.push({
    name: "vyshyvanka",
    price: 100,
    currency: "USD"
});


console.log(transactions);

let uahProfit = 0;
const usdPrice = 28.69;

for(let index = 0; index < transactions.length; index += 1) {
    if(transactions[index].currency === 'UAH') {
        uahProfit = uahProfit = transactions[index].price;
    } else if(transactions[index].currency === 'USD') {
        uahProfit = uahProfit + transactions[index].price * usdPrice;
    }
}

console.log(uahProfit);