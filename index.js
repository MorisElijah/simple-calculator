let num1 = 8
let num2 = 2 
document.getElementById("first-number").textContent = num1
document.getElementById("second-number").textContent = num2
let sumEl = document.getElementById("sum-el")


function addButton(){
    let total = num1 + num2
    sumEl.textContent ="sum: " + total
}
function subtractButton(){
    let total = num1 - num2
    sumEl.textContent ="sum: " + total
}
function divideButton(){
    let total = num1 / num2
    sumEl.textContent ="sum: " + total
}
function multiplyButton(){
    let total = num1 * num2
    sumEl.textContent ="sum: " + total
}



