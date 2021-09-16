document.getElementById("pin-generator").addEventListener("click", function () {
  const pin = Math.floor(1000 + Math.random() * 9000);
  document.getElementById("display-pin").value = pin;
});
document.getElementById("number").addEventListener("click", function (event) {
  const digit = event.target.innerText;
  if (isNaN(digit)) {
    if (digit === "C") {
      document.getElementById("typed-pin").value = null;
    } else if (digit === "B") {
      const typedInput = document.getElementById("typed-pin").value;
      const afterDeletion = typedInput.substr(0, typedInput.length - 1);
      document.getElementById("typed-pin").value = afterDeletion;
    }
  } else {
    const typedInput = document.getElementById("typed-pin");
    typedInput.value += digit;
  }
});
let counter = 3;
function matchPin() {
  if (counter > 0) {
    const generatedPin = document.getElementById("display-pin").value;
    const typedPin = document.getElementById("typed-pin").value;
    if (generatedPin === typedPin) {
      const correctPin = document.getElementById("notification-2");
      correctPin.style.display = "block";
      const displayMsg = document.getElementById("notification-1");
      displayMsg.style.display = "none";
      const displayFirst = document.getElementById("first");
      displayFirst.style.display = "none";
      const displaySecond = document.getElementById("second");
      displaySecond.style.display = "block";
    } else {
      const displayMsg = document.getElementById("notification-1");
      displayMsg.style.display = "block";
      const correctPin = document.getElementById("notification-2");
      correctPin.style.display = "none";
    }
    counter--;
    document.getElementById("submission-counter").innerText = counter;
  } else {
    document.getElementById("typed-pin").value = "Limit exceed";
  }
}
