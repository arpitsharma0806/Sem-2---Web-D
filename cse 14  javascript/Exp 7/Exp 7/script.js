function calculateSum() {
  let n = document.getElementById("numberInput").value;
  n = parseInt(n);

  if (isNaN(n) || n <= 0) {
    document.getElementById("result").innerText = "Please enter a positive number.";
    return;
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  document.getElementById("result").innerText = "The sum of numbers from 1 to " + n + " is: " + sum;
}