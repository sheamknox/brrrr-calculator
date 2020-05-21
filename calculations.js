

function monthlyPayment(p, n, i) {
    return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
  
}

function cashFlow(income, expenses) {
    let net = income - expenses;
    return net;
} 



function cashOnCash(income, investment ) {
    income *= 12;
    let cocr = (income/investment).toFixed(4) * 100;
    return cocr;
}

