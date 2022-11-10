'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

//Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0)
// console.log(0.1+0.2)

labelBalance.addEventListener('click',function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(item,index){
    if(index%2===0){
      item.style.backgroundColor = 'orangered';
    }
  })
})



//TODO: Numberic seperators
//In english we use coma to seperate a large number
//Like 240,574,000,000
//In javascript we can use _ as a seperator and then engines ignores the underscore and print the number
/* const largeNumber = 240_574_000_000;
console.log(largeNumber); */



//TODO: Max number can be stored safely
/* console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER)
console.log(2 ** 53 - 0); */


//TODO: BigInt
/* console.log(19471938461872364871623487169238746n); //n converts normal number into bigint
console.log(typeof 19471938461872364871623487169238746n); //BigInt */

//We can create bigint with constructor BigInt
/* console.log(BigInt(13894179823491)); */


//TODO: Javascript Date
/* const now = new Date()
console.log(now);

console.log(new Date('Sep 26 2022 12:29:59'));
console.log(new Date('December 25, 2018'));

//Passing amount of millisecond time passed since the beginning of the unix time
//Beginning of the unix time is January 1st 1970
console.log(new Date(0));
//3 Days after this
console.log(new Date(3 * 24 * 60 * 60 * 1000)); */


//Adding the label date to DOM
/* 
const now = new Date()
const day = `${now.getDate()}`.padStart(2, '0');
const month = `${now.getMonth()+1}`.padStart(2,'0');
const year = now.getFullYear();
const hour = now.getHours();
const minute = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minute}`; */


//TODO: Calculating days passed

/* const calcDaysPassed = (date1,date2) => Math.abs(date1-date2)/(1000 * 60 * 60 * 24);
const daysPassed = calcDaysPassed(new Date(2022,10,26),new Date(2022,10,16));
console.log(daysPassed); */


//FIXME: Internationalizing Dates
/* const now = new Date()
console.log(new Intl.DateTimeFormat('en-US').format(now));  //US Format
console.log(new Intl.DateTimeFormat('en-GB').format(now));  //UK Format
console.log(new Intl.DateTimeFormat('ar-SY').format(now));  //Arabic - Syria


const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //2-digit, long, short
  year: 'numeric',   //2-digit, numeric
  weekday: 'short'  //short, narrow, long
}
console.log(new Intl.DateTimeFormat('en-GB', options).format(now));

const locale = navigator.language;
console.log(locale)

console.log(new Intl.DateTimeFormat(locale, options).format(now)); */


//TODO: Formating numbers with Intl
/* const num = 1231213.23
console.log("US  :  ",new Intl.NumberFormat('en-US').format(num))  //US formatting
console.log("Germany  :  ",new Intl.NumberFormat('de-DE').format(num))  //Germany formatting
console.log("Syria  :  ",new Intl.NumberFormat('ar-SY').format(num))  //Syria formatting

const option = {
  style: 'currency', //unit, percent, currency
  unit: 'mile-per-hour', //mile-per-hour, celsius
  currency: 'INR', //EUR, USD, INR
  useGrouping: false
}

console.log("US  :  ",new Intl.NumberFormat('en-US',option).format(num)) */



//TODO: setTimeout function
/* setTimeout(()=>console.log("Here is your pizza 🍕"),3000);
console.log("Waiting.......") */

//TODO: Passing arguments to the function in setTimeout
/* setTimeout((ing1,ing2)=>console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),3000,'garlic','pepper'); */

//TODO: Clearing timeout
/* const ingredients = ['peppe','garlic'];
const pizzaTimer = setTimeout(
  (ing1,ing2)=>console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),3000,...ingredients);

if(ingredients.includes('pepper')) clearTimeout(pizzaTimer); */




//TODO: setInterval function
/* setInterval(function(){
  const now = new Date();
  console.log(now);
},1000); */