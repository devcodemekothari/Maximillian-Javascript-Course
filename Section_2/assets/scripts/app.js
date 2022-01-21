let defaultResult = 0;
let currenResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function add(){
    const enteredNumber = getUserInput();
    const calcDescription = `${currenResult} + ${enteredNumber}`;
    currenResult = currenResult + enteredNumber;
    outputResult(currenResult, calcDescription);
}

addBtn.addEventListener('click',add);