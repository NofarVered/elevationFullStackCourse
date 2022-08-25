const btn = document.querySelector("button");
const nameElem = document.getElementById("name");
const phoneElem = document.getElementById("phone");
const salaryElem = document.getElementById("salary");
const birthElem = document.getElementById("birth");

btn.addEventListener("click", function () {
  const msgElem = document.getElementById("msg");
  if (nameElem.value.length < 2) {
    msgElem.innerText += "Name must be longer than 2 characters \n";
  }
  if (phoneElem.value.length < 10) {
    msgElem.innerText += "Phone must be 10 digits long \n";
  }
  if (salaryElem.value < 10000 || salaryElem.value > 16000) {
    msgElem.innerText +=
      "Salary must be greater than 10,000 but less than 16,000 long \n";
  }
  if (birthElem.value == "") {
    msgElem.innerText += "Birthday may not be null \n";
  }
});
