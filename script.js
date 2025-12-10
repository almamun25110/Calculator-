const resultElement = document.getElementById('result');
const Clearbtn = document.getElementById('Clearbtn');
const DeleteBtn = document.getElementById('DeleteBtn');
const DivideBtn = document.getElementById('DivideBtn');
const MultiplyBtn = document.getElementById('MultiplyBtn');
const subtractBtn = document.getElementById('subtractBtn');
const addBtn = document.getElementById('addBtn');
const DecimalBtn = document.getElementById('DecimalBtn');
const equalBtn = document.getElementById('equalBtn');
const numberBtns = document.querySelectorAll('.number');

// Initialize the variables
let result = "";
let oparation = "";
let previousOperand = "";


//Function to append number
const appendNumber = (number) => {
    if(number === '.' && result.includes ('.')) {
        return;
    }
    result += number;
    updateDisplay();
}

//Function to update display
const updateDisplay = () => {
    if(oparation){
        resultElement.innerText = '${previousOperand} ${oparation} ${result}';
    } else{
        resultElement.innerText = result;
    };
};
//Function to select oparator
const selectOparator = (selectValue) => {
    if(result === "") return;
    if(oparation !== '' && previousOperand !== '') {
        calculateResult();
    }
    oparation = oparatorValue;
    previousOperand = result;
    result = '';
    updateDisplay();
}

//Function to calculate result
const calculateResult = () => {
    let evalutedResult;
    const prev = previousOperand;
    const current = result;

    if(isNaN(prev) || isNaN(current)) return;
    switch (oparation) {
        case '+':
            evalutedResult = prev + current;
            break;
        case '-':
            evalutedResult = prev - current;
            break;
        case '*':
            evalutedResult = prev * current;
            break;
        case '/':
            evalutedResult = prev / current;
            break;
    
        default:
            return;
    }
    result = evalutedResult.toString();
    oparation = '';
    previousOperand = '';
};

//Add event listener to number buttons
numberBtns.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
    });
});

DecimalBtn.addEventListener('click', () => {
    appendNumber('.');
});

addBtn.addEventListener('click', () => {
    appendNumber('+');
});

DivideBtn.addEventListener('click', () => {
    appendNumber('/');
});

MultiplyBtn.addEventListener('click', () => {
    appendNumber('*');
});

subtractBtn.addEventListener('click', () => {
    appendNumber('-');
});


equalBtn.addEventListener('click', () => {
    calculateResult();
})