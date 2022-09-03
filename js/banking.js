
function getInputValue(inputId){
    
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText);  
    //clear deposit input value
    inputFeild.value = '';
    return amountValue;
}

function updateTotalFeild(totalFeildId ,depositAmount){
    const totalElement = document.getElementById(totalFeildId);
    const totalText = totalElement.innerText;
    const previoseTotal = parseFloat(totalText);
    totalElement.innerText = previoseTotal + depositAmount;

}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}

function updateBalance(amount , isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount; 
    }
    else{
        balanceTotal.innerText = previousBalanceTotal  - amount; 
    }

}

//deposit part handle
document.getElementById('deposit-button').addEventListener('click',function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    //get current deposit
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previoseDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previoseDepositTotal + depositAmount;

    
    //update balance total
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = balanceTotalAmount + depositAmount; 
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalFeild('deposit-total',depositAmount);
    updateBalance(depositAmount, true);
    }
});

//withdraw part handle

document.getElementById('withdraw-button').addEventListener('click',function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawInputAmount = parseFloat(withdrawInputText);

    
    // const withdrawInputAmount = getInputValue('withdraw-input');
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;

    // const previousWithdarwAmount = parseFloat(withdrawTotalText);

    // withdrawTotal.innerText = withdrawInputAmount + previousWithdarwAmount;
    //update balance total

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const balanceTotalAmount = parseFloat(balanceTotalText);
    // balanceTotal.innerText = balanceTotalText - withdrawAmount;
    // withdrawInput.value = '';

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance ){
        updateTotalFeild('withdraw-total',withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You can not withdraw more than what you have!');
    }

});