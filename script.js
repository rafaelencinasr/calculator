let operands = [];
operands[0]= 2;
operands[1]= 0;

let currentNumber = ''; 
let decimalFlag = false;
let maxDigits = 16; //16 digits max

console.table(operands);

// Operations
function sum(){
    return operands[0]+operands[1]
};
console.log(`Sum: ${sum()}`);

function subtract(){
    return operands[0]-operands[1]
};
console.log(`Subtraction: ${subtract()}`);

function mult(){
    return operands[0]*operands[1]
};
console.log(`Multiplication ${mult()}`);

function divide(){
    if(operands[1]==0){
        return "Cant do that Dave"
    }
    else{
    return operands[0]/operands[1]
    }
};
console.log(`Division: ${divide()}`);

//  Display update
const display = document.querySelector('#display');

function updateDisplay(){
display.textContent= currentNumber;
console.log(`string length: ${currentNumber.length}`)
}

// Number update
function updateNumber(n){  
    if(n==='.'){
        maxDigits=17; 
        // Decimal point has no length for this typography, so an extra
        // digit can be used.
    }
    // If the first number is a 0, 
    if(currentNumber==='0'&& n != "."){
        currentNumber = n;
        updateDisplay()
    }

    else{
        if(currentNumber.length<maxDigits){
            currentNumber = currentNumber + n;
            updateDisplay()
        }
    }
}


// Buttons variables
const cDelEv = document.querySelector('#cDelEv');
const backDel = document.querySelector('#backDel');
const changeSign = document.querySelector('#changeSign');
const divBTN = document.querySelector('#divBTN');

const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const multBTN = document.querySelector('#multBTN');

const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const subBTN = document.querySelector('#subBTN');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const sumBTN = document.querySelector('#sumBTN');

const cero = document.querySelector('#cero');
const decimal = document.querySelector('#decimal');
const equal = document.querySelector('#equal');


// Number buttons event listeners

decimal.addEventListener('click',()=>{
    if(!decimalFlag){
    updateNumber('.')
    decimalFlag = true;
    }
});

cero.addEventListener('click',()=>{updateNumber('0')});

one.addEventListener('click',()=>{updateNumber('1')});

two.addEventListener('click',()=>{updateNumber('2')});

three.addEventListener('click',()=>{updateNumber('3')});

four.addEventListener('click',()=>{updateNumber('4')});

five.addEventListener('click',()=>{updateNumber('5')});

six.addEventListener('click',()=>{updateNumber('6')});

seven.addEventListener('click',()=>{updateNumber('7')});

eight.addEventListener('click',()=>{updateNumber('8')});

nine.addEventListener('click',()=>{updateNumber('9')});

// Function buttons event listeners

cDelEv.addEventListener('click',()=>{
    currentNumber = '';
    decimalFlag=false;
    updateNumber('0');
    });  