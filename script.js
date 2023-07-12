

let userBalance = 5000;
const userPin = 1234;
const userAccountNumber = 1234567890;




function checkBalance() {
  const enteredPin = parseInt(prompt("Enter Your Pin: "));

  if (enteredPin === userPin) {
    document.getElementById("output").innerHTML = `Account balance: ${userBalance}`;
  } else {
    document.getElementById("output").innerHTML = "Invalid Pin";
  }
}



function fundsWithdrawal() {

  const amount = prompt("Enter Amount: ");
  const enteredPin = parseInt(prompt("Enter Your Pin: "));

  if (enteredPin !== userPin) {
    document.getElementById("output").innerHTML = "Incorrect pin";
  } else if (amount <= userBalance && enteredPin === userPin) {
    document.getElementById("output").innerHTML = `${amount} Transaction Successful!`;
    userBalance -= amount;
  } else {
    document.getElementById("output").innerHTML = "Not Enough Balance";

  }
}

function depositFunds() {
  const enteredAccountNumber = parseInt(prompt("Enter Your Account Number: "));

  if (enteredAccountNumber === userAccountNumber) {
    const amount = parseFloat(prompt("Enter Amount: "));
    userBalance += amount;
    document.getElementById("output").innerHTML = "Transaction Successful";

  } else {
    document.getElementById("output").innerHTML = "Incorrect Account Number! \nYour Account Number is 1234567890";
  }
}


function transferFunds() {
  const accountNumber = (prompt("Enter Account Number: "));
  let amount;

  if (accountNumber.length === 10 && accountNumber !== userAccountNumber.toString()) {
    amount = parseFloat(prompt("Enter Amount: "));

    if (amount <= userBalance) {
      userBalance -= amount;
      document.getElementById("output").innerHTML = "Transaction Successful";
    } else {

      document.getElementById("output").innerHTML = "Not Enough Balance";
    }
  } else {
    document.getElementById("output").innerHTML = "Invalid Account Number";
  }

}




