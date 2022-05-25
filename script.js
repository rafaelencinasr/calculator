let operands = [];
let currentNumber = '0'; 
let decimalFlag = false;
let maxDigits = 16; //16 digits max
let index=0;
let operator ='';
let divBy0 = false;
let precisionDigits=15;

// CHECK THIS WEBSITE https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

// Operations
// Added toPrecision(6) to prevent float numbers from showing wrong results
// Divided by 1 to remove trailing zeros
function sum(){
    currentNumber = ((Number(operands[0])+Number(operands[1])).toPrecision(precisionDigits)/1).toString(10);
};

function subtract(){
    currentNumber = (Number(operands[0])-Number(operands[1])).toPrecision(precisionDigits)/1;
};

function mult(){
    currentNumber = (Number(operands[0])*Number(operands[1])).toPrecision(precisionDigits)/1;
};

function divide(){
    if(operands[1]==0){
        currentNumber = "Can't do that, Dave.";
        divBy0=true;
    }
    else{
        currentNumber = (Number(operands[0])/Number(operands[1])).toPrecision(precisionDigits)/1;
    }
};

// Store number to operand array

function storeNumber(){
    operands[index] = currentNumber;
}

//  Display update
const display = document.querySelector('.display');

function updateDisplay(){
    if(divBy0){
        display.textContent= currentNumber;
    }
    else{
        if(currentNumber<9999999999999999 && currentNumber>-99999999999999){
            display.textContent= currentNumber;
        }
        else{
            display.textContent= Number(currentNumber).toExponential(6);
        }
    }
    divBy0=false;
}

updateDisplay();

// Number update

function updateNumber(n){      //updateDisplay();
    // If the first number is a 0, 
    if(currentNumber==='0'&& n != "."){
        currentNumber = n;
        updateDisplay()
    }

    else if(currentNumber===''&& n === "."){
        currentNumber = '0'+n;
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
    operands[0]='';
    operands[1]='';
    });

    // Steps that happens for every operator button pressed
function operatorBTNPressed(){
    storeNumber();
    index=1;
    currentNumber = '';
    decimalFlag=false;
}    

sumBTN.addEventListener('click',()=>{
    if(index==1){
        getResults();
    }
    operatorBTNPressed();
    operator='+';
});

subBTN.addEventListener('click',()=>{
    if(index==1){
        getResults();
    }
    operatorBTNPressed();
    operator='-';
});

multBTN.addEventListener('click',()=>{
    if(index==1){
        getResults();
    }
    operatorBTNPressed();
    operator='*';
});

divBTN.addEventListener('click',()=>{
    if(index==1){
        getResults();
    }
    operatorBTNPressed();
    operator='/';
});

function getResults(){
    storeNumber();
    index=0;
    switch(operator){
        case '+':
            sum();
            break;
        case '-':
            subtract();
            break;
        case '*':
            mult();
            break;
        case '/':
            divide();
            break;
    }
    operator = '';
    updateDisplay();
}
equal.addEventListener('click',()=>{
    if(/*currentNumber==='0'||*/currentNumber===''){
        index=0;
    }
    else{getResults();}

});

backDel.addEventListener('click',()=>{
    if(currentNumber.length<=1){
        currentNumber = '0';
    }
    else{
    currentNumber = currentNumber.slice(0,-1);
    }
    updateDisplay()
})

changeSign.addEventListener('click',()=>{
    currentNumber = currentNumber * -1;
    updateDisplay()
});

// Easter egg? sure
const solarPower = document.querySelector('.solarPower');
solarPower.addEventListener('mouseenter',()=>{
    display.classList.add('noPower')
})
solarPower.addEventListener('mouseleave',()=>{
    display.classList.remove('noPower')
})