

const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");

const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener('click', function validateBillAndCashAmount()  {
  // console.log('clicking');
  hideMessage();

  if (billAmount.value > 0) {
    if (cashGiven.value   >=  billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("do u wanna wasj plates ?");
    }
  } else {
    showMessage("invalid bill amount");
  }
});

function calculateChange(amountToBeReturned) {
   // let remainingAmount = amountToBeReturned;
  for (let i = 0; i < availableNotes.length; i++) {
 
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}



