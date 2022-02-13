login = () => {
  const userEmail = document.getElementById("user-email").value;
  const userPassword = document.getElementById("user-password").value;

  if (userEmail === "authentic@bank.com" && userPassword === "password") {
    window.location.href = "banking.html";
  }
};
