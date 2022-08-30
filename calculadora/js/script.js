const inputCalculator = document.querySelector(".calculator-input");
const btns = document.querySelectorAll('button:not(.right)');
const btnClear = document.querySelector("#btn-clear");
const btnEquals = document.querySelector(".right");

btns.forEach(
    btn => btn.addEventListener('click',
        () => inputCalculator.value += btn.innerHTML
    )
);
btnClear.addEventListener('click', clearInput);
btnEquals.addEventListener('click', showResult);

function clearInput() {
    inputCalculator.value = "";
}

function showResult() {
    try {
        let str = inputCalculator.value;
        for (let i = 0; i <= str.length; i++) {
            if (str.substring(i, i + 1) == '×' || str.substring(i, i + 1) == '÷') {
                if (str.substring(i, i + 1) == '×') {
                    str = str.replace(str.substring(i, i + 1), '*');
                } else {
                    str = str.replace(str.substring(i, i + 1), '/');
                }
            }
        }
        console.log(str);
        inputCalculator.value = eval(str);

    }catch(e){
        inputCalculator.value = "Error";
    }
    
}





