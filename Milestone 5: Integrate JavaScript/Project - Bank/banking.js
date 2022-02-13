document
  .getElementById("deposit-button")
  .addEventListener("click", () => banking("deposit"));
document
  .getElementById("withdraw-button")
  .addEventListener("click", () => banking("withdraw"));

const banking = (operation) => {
  //Get Input
  const inputElement = document.getElementById(operation + "-input");
  const inputAmount = parseFloat(inputElement.value);

  //Get Balance
  const balance = document.getElementById("balance-total");
  const balanceAmount = parseFloat(balance.innerText);

  //Validate
  if (
    (operation == "withdraw" && inputAmount > balanceAmount) ||
    inputAmount < 0
  ) {
    alert("Invalid Input");
    return;
  }

  //Update Total Amount
  const previousAmount = parseFloat(
    document.getElementById(operation + "-total").innerText
  );
  const updatedAmount = inputAmount + previousAmount;
  document.getElementById(operation + "-total").innerText = updatedAmount;
  inputElement.value = "";

  //Update Balance
  const updatedBalance =
    operation === "deposit"
      ? balanceAmount + inputAmount
      : balanceAmount - inputAmount;
  balance.innerText = updatedBalance;
};
