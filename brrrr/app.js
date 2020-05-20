

form.onsubmit = function (e) {
  e.preventDefault();
  
  //Acquisition
  const tax = parseFloat(document.querySelector('#tax').value);
  const price = parseFloat(document.querySelector('#price').value);
  const closing = parseFloat(document.querySelector('#closing').value) ;
  const repair = parseFloat(document.querySelector('#repair').value) ;
  
  let acquisitionCosts = tax + price + closing + repair;


  //Refinance
  const loan = document.querySelector('#loan').value;
  const interest = document.querySelector('#interest').value / 100 /  12;
  const fees = document.querySelector('#fees').value;
  const amortization = document.querySelector('#amort').value * 12;
  const arv = document.querySelector('#arv').value;
  const rehabTime = document.querySelector('#rehab-time').value;
  const seasoning = document.querySelector('#seasoning').value;
  let mortagePayment = monthlyPayment(loan, amortization, interest).toFixed(2);

  //Montly Income
  const rent = parseInt(document.querySelector('#rent').value);

  let monthlyIncome = rent;

  //Monthly Expenses
  const insurance = parseInt(document.querySelector('#insurance').value);
  const vacancyInput = document.querySelector('#vacancy').value;
  const maintInput = document.querySelector('#maint').value;
  const capexInput = document.querySelector('#capex').value;
  const mgmtInput = document.querySelector('#mgmt').value;

  //Monthly expenses as percentage
  let vacancy = (parseFloat((vacancyInput/100).toFixed(2)) * mortagePayment).toFixed(2);
  let maint = (parseFloat((maintInput/100).toFixed(2)) * mortagePayment).toFixed(2);
  let capex = (parseFloat((capexInput/100).toFixed(2)) * mortagePayment).toFixed(2);
  let mgmt = (parseFloat((mgmtInput/100).toFixed(2)) * mortagePayment).toFixed(2);
  console.log(`insurance: ${insurance}`);
  console.log(`vacancy: ${vacancy}`);
  console.log(`maint: ${maint}`);
  console.log(`capex: ${capex}`);
  console.log(`mgmt: ${mgmt}`);

  console.log(`type: ${typeof(vacancy)}, ${typeof(maint)}, ${typeof(capex)}, ${typeof(mgmt)}`);
  let monthlyExpenses = parseFloat(vacancy) + 
                        parseFloat(maint) + 
                        parseFloat(capex) + 
                        parseFloat(mgmt) + 
                        parseFloat(insurance) + 
                        parseFloat(mortagePayment);

  console.log(`monthlyExpenses: ${monthlyExpenses}`);
  
  let netCashFlow = cashFlow(monthlyIncome, monthlyExpenses).toFixed(2);


  let cocr = cashOnCash(monthlyIncome, acquisitionCosts);
 
  modal.textContent = `Monthly Cash Flow: $${netCashFlow}, Cash on cash return: ${cocr}%`;

}



