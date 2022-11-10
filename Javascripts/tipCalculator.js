const bill = 275;
let tip = bill>=100 && bill<300 ? bill * (15/100) : bill*(20/100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);