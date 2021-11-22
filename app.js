const buttonValues = document.querySelectorAll('.value')
let num = document.getElementById('num-people');
let sum = document.getElementById('amount');
const reset = document.getElementById('reset')


buttonValues.forEach(buttonValue => {
    buttonValue.addEventListener('click', (e) => {
        e.preventDefault();
        const result = (buttonValue.value / 100) * sum.value;
        const calculate = Number(result) / num.value;
        document.querySelector('.amount-person').innerText = '$' + calculate.toFixed(2);
        const calcTotal = (result + Number(sum.value)) / num.value;
        document.querySelector('.total-person').innerText = '$' + Number(calcTotal).toFixed(2);
        reset.disabled = false;
    })
})
reset.addEventListener("click", () => {
    num.value = "";
    sum.value = "";
    document.querySelector('.amount-person').innerText = "$0.00";
    document.querySelector('.total-person').innerText = "$0.00";
    reset.disabled = true;


})