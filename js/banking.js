// Handle Deposit Button
document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

// Deposit Total
    const totalDeposit = document.getElementById("deposit-amount");

    const previousDepositText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    console.log(newDepositTotal);
    totalDeposit.innerText = newDepositTotal;


    // Update account Balance
const balanceTotal =document.getElementById('balance-total');
const previousbalanceTotalText = balanceTotal.innerText;
const previousBalanceTotal =parseFloat(previousbalanceTotalText);
 const newBalanceTotal =previousBalanceTotal + newDepositTotal;
 balanceTotal.innerText = newBalanceTotal;
    // CLEAR INPUT 
    depositInput.value='';

  });

  // Withdrow Event handler
  document.getElementById('withdrow-button').addEventListener('click', function(){

    const withdrowInput =document.getElementById('withdrow-input');

    const newWithdrowAmountText = withdrowInput.value
    const newWithdrowAmount = parseFloat(newWithdrowAmountText);

  // Set Withdraw Total
  const WithdrawTotal = document.getElementById('withdrow-total');
   const previousWithdrowText = WithdrawTotal.innerText;
   const previousWithdrowTotal = parseFloat(previousWithdrowText);

   const newWithdrowTotal =previousWithdrowTotal + newWithdrowAmount;
   WithdrawTotal.innerText = newWithdrowTotal; 

  //  Clear Withdrow Input
   withdrowInput.value='';

// Update Balance after Withdrow
const balanceTotal =document.getElementById('balance-total');
const previousbalanceText = balanceTotal.innerText;
const previousBalanceTotal =parseFloat(previousbalanceText);
const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;

balanceTotal.innerText = newBalanceTotal;

  })