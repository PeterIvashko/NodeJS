const bool = true; // false

if(obj.home === 'Kyiv') {
    // console.log('is the capital of Ukraine');
} else {
    // console.log('Some another city');
}


for(let index = 0; index < arr.length - 1; index += 1) {
    // console.log(arr[index]);
}

for(let index = arr.length; index >= 0; index = index - 1) {
    // This is text describes something
    // console.log(arr[index]);
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