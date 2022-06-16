function minimumChange(coins) {
    let currentChange = 1;

    let sortedCoins = coins.sort((a,b) => a -b);

    for(let i = 0; i < sortedCoins.length ; i++) {
        if(currentChange < sortedCoins[i]) return currentChange
        currentChange += sortedCoins[i];
    }
    
    return currentChange;
}


const coins1 = [5, 7, 1, 1, 2, 3, 22]; //20
const coins2 = [1, 1, 1, 1, 1];  //6
const coins3 = [1, 5, 1, 1, 1, 10, 15, 20, 100]; //55

console.log(minimumChange(coins1));
console.log(minimumChange(coins2));
console.log(minimumChange(coins3));
