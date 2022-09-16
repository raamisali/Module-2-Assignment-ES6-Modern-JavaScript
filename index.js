var info = [];

function calculateAmount(loanAmount, interest, loanTermYears) {
  var totalMonth = loanTermYears * 12;
  var montlyInterest = interest / 100 / 12;
  var temp = Math.pow(1 + montlyInterest, totalMonth);
  var monthlyPayment = (loanAmount * montlyInterest * temp) / (temp - 1);
  var sum = + monthlyPayment * totalMonth;
  var totalAmount = sum;

  return totalAmount.toFixed(2);
}

function Instance(instance) {
  this.Id = instance.Id;
  this.customerName = instance.customerName;
  this.phoneNumber = instance.phoneNumber;
  this.address = instance.address;
  this.loanAmount = instance.loanAmount;
  this.interest = instance.interest;
  this.loanTermYears = instance.loanTermYears;
  this.loanType = instance.loanType;
  this.description = instance.description;
  this.calculatedLoanAmount = calculateAmount(this.loanAmount, this.interest,this.loanTermYears);
}


var instanceParams1 = {
  Id: 0,
  customerName: "Khawaja Sardar",
  phoneNumber: "745-544-7777",
  address: "New York, NY",
  loanAmount: 5000,
  interest: 6.0,
  loanTermYears: 5,
  loanType: "APR",
  description: "Loan domain for instance1"

};

var instanceParams2 = {
    Id: 1,
    customerName: "Jibran Haider",
    phoneNumber: "345-544-3377",
    address: "Buffalo, NY",
    loanAmount: 10000,
    interest: 2.0,
    loanTermYears: 7,
    loanType: "APR",
    description: "Loan domain for instance2"
  };

  var instanceParams3 = {
    Id: 2,
    customerName: "Mujtaba Ali",
    phoneNumber: "345-544-3377",
    address: "Bradford, UK",
    loanAmount: 45700,
    interest: 13.0,
    loanTermYears: 25,
    loanType: "APR",
    description: "Loan domain for instance3"
  };
  var instanceParams4 = {
    Id: 3,
    customerName: "Saleem Akhtar",
    phoneNumber: "325-144-3111",
    address: "Bradford, UK",
    loanAmount: 700,
    interest: 10.0,
    loanTermYears: 3,
    loanType: "APR",
    description: "Loan domain for instance4"
  };
  var instanceParams5 = {
    Id: 4,
    customerName: "Sheryar Khan",
    phoneNumber: "44-524-2377",
    address: "Bradford, UK",
    loanAmount: 8400,
    interest: 5.0,
    loanTermYears: 6,
    loanType: "APR",
    description: "Loan domain for instance5"

  };

const instance1 = new Instance(instanceParams1);
const instance2 = new Instance(instanceParams2);
const instance3 = new Instance(instanceParams3);
const instance4 = new Instance(instanceParams4);
const instance5 = new Instance(instanceParams5);

info.push(instance1);
info.push(instance2);
info.push(instance3);
info.push(instance4);
info.push(instance5);

console.log(info);