function getCalculatorValue(id){
	const inputValue = document.getElementById(id);
	const inputValueString = inputValue.value;
	const inputValueNumber = parseFloat(inputValueString);

	return inputValueNumber;
}


function calculatorBalanceAndExpense(){
	// all balance 
	const income = getCalculatorValue('incomeId')
	// expense balance 
	const food = getCalculatorValue('food')
	 const rent = getCalculatorValue('rent')
	const cloth = getCalculatorValue('cloth')
	
//   ======================expensestotaladdition===============================
	const totalExpense = food + rent + cloth;

        // ======== totalExpensesvalue=============
	  const expenseValue = document.getElementById('totalExpensesValue');
	  expenseValue.innerText = totalExpense;

	// ================  remainningbalance================
	  const remainningBalance = income - totalExpense;

	    //==================== balance value ======================
	  const balanceValue = document.getElementById('balance')
	  balanceValue.innerText = remainningBalance;

    return remainningBalance;
	
}

function saveManeyCalculator(){
	const saveManeyField = getCalculatorValue('saveMoney');
	const totalPreviewsValue = calculatorBalanceAndExpense();
	
	const moneySave = (totalPreviewsValue * saveManeyField)/100;
	
	const saveingAmount = document.getElementById('save-tk');
	saveingAmount.innerText = moneySave;

	const remainingBalance = totalPreviewsValue - moneySave;
	
	const totalRemainingBalance = document.getElementById('lastremaining-balance');
	totalRemainingBalance.innerText = remainingBalance;
}




// // const result = getCalculatorValue('incomeId')
// const result = getCalculatorValue('food')
// console.log(result);