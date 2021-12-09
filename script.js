var initialPrice = document.querySelector("#initial-price");

var currentPrice = document.querySelector("#current-price");

var quantityOfStock = document.querySelector("#quantity-of-stock");

var submitBtn = document.querySelector("#submit-btn");

var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    
    var ip = Number(initialPrice.value);
    var quantity = Number(quantityOfStock.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, quantity, curr);
    
}

function calculateProfitAndLoss(initial, qty, current) {
    if (initial && qty && current) {
        if (initial > current) {
            var loss = (initial - current) * qty;
            var lossPercentage = (loss / initial) * 100;

            outputBox.innerHTML = (`hey the loss is ${loss} and loss percentage is ${lossPercentage} %`)
            outputBox.style.color="red";

        } else if (current > initial) {
            var profit = (current - initial) * qty;
            var profitPercentage = (profit / initial) * 100;
            outputBox.innerHTML = (`hey the profit is ${profit} and profit percentage is ${profitPercentage} %`)
            outputBox.style.color="green";
        } else {
            outputBox.innerHTML = "No Profit No loss";
        }

    }






}