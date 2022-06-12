//declarations
let ipdisplay=document.getElementById('ipdisplay');
let input=document.getElementById('input');
let output=document.getElementById('output');
let equals=document.getElementById('=');
let deletebtn=document.getElementById('delete');
let num1='';
let num2='';
let operator='';
let result='';
let ans='';


//basic math functions using arrow functions
add = (num1,num2) => +num1 + +num2;
sub = (num1,num2) => num1 - num2;
mul = (num1,num2) => num1 * num2;
div = (num1,num2) => {
    if(num2 == '0'){
        return 'divide by zero not possible';
    }
    else{
        return num1 / num2;
    }
}

//function to round decimal values to 3 digits
function roundNumber(calculation) {
    let rounded = Math.round(calculation * 1000) / 1000;
    return rounded;
}


//function for the main display to show all the inputs given
function display (button) {
    if(ipdisplay.textContent.includes(' ')){
        ipdisplay.textContent=output.textContent;
    }
    if(button.id==='='){
        ipdisplay.textContent+=button.textContent;
        ipdisplay.textContent+=' ';
    }
    else if(button.classList.contains('number') || button.classList.contains('operator')){
        ipdisplay.textContent+=button.textContent;
    }
}



//this function is to show each number individually. This helps select 
function displayNumber(button){
    if(output.textContent.includes('divide by zero not possible')){
        clearDisplay('clear');
    }
    if(input.textContent == '0'){
        input.textContent = button.textContent; //not else if here. if is the crct stmt. dont change
    }
    else {
        input.textContent += button.textContent;
    }
    setEqualsButtonState();
}


function operate (button) {
    if(num1==='') {
        num1=input.textContent;
        operator=button.id;
    }
    else if(num1 !=='' && operator !== ''){
        num2=input.textContent;
        output.textContent = calcResult(operator);
        num1=calculate(num1,num2,operator);
        operator=button.id;
    }
    setEqualsButtonState('disable');
    input.textContent='';
}


function calculate (num1,num2,operator) {
    if(operator == "+") {
        ans = add(num1,num2);
    }
    if(operator == "-") {
        ans = sub(num1,num2);
    }
    if(operator == "*") {
        ans = mul(num1,num2);
    }
    if(operator == "/") {
        ans = div(num1,num2);
    }
    if (ans !== 'divide by zero not possible') {
        return roundNumber(ans);
    }
    return ans;
}

function calcResult(operator) {
    if(operator=="+"){
        result= `${calculate(num1,num2,operator)}`;
    }
    if(operator=="-"){
        result= `${calculate(num1,num2,operator)}`;
    }
    if(operator=="*"){
        result= `${calculate(num1,num2,operator)}`;
    }
    if(operator=="/"){
        result= `${calculate(num1,num2,operator)}`;
    }
    return result;
}

function clearDisplay (type) {
    if(type== 'clear'){
        num1='';
        num2='';
        operator='';
        result='';
        ipdisplay.textContent='';
        input.textContent='';
        output.textContent='';
        result='';
        ans='';
    }
    else if(type == 'delete'){
        input.textContent=input.textContent.slice(0,-1);
        if(ipdisplay.textContent.slice(-1) !== 'x' &&
           ipdisplay.textContent.slice(-1) !== '+' && 
           ipdisplay.textContent.slice(-1) !== '-'&&
           ipdisplay.textContent.slice(-1) !== '÷' &&
           ipdisplay.textContent.slice(-1) !== ' ' &&
           ipdisplay.textContent.slice(-1) !== ' ')
           {
            ipdisplay.textContent=ipdisplay.textContent.slice(0,-1);
        }
    }
}

function displayDecimal(button) {
    if(input.textContent.includes('.')){
        button.setAttribute('disabled','');
    }
    else {
        input.textContent += button.textContent;
    }
}

function setEqualsButtonState(state) {
    if (operator === '' || state === 'disable') {
      equals.setAttribute('disabled', '');
    } else {
      equals.removeAttribute('disabled', '');
    }
  }


let btns = document.querySelectorAll('button');
function listenButtons () {
   btns.forEach((button) => {
       button.addEventListener('click', () => {
           if(button.classList.contains('number')){
                displayNumber(button);
                display(button);
            }
            else if(button.classList.contains('operator')){
                operate(button);
                display(button);
            }
            else if(button.id === '='){
                operate(button);
                display(button);
            }
            else if(button.id === 'clear'){
                clearDisplay('clear');
            }
            else if(button.id === 'delete'){
                clearDisplay('delete');
            }
            else if(button.id === '.'){
                displayDecimal(button);
            }
        })
    })
}
listenButtons();