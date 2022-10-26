const inputEl = document.getElementById("lookUpInput");
const resultEl = document.getElementById("result");
document.getElementById("lookUpForm").addEventListener("submit", handleSubmit);
const URL = "https://www.dictionaryapi.com/api/v3/references/sd3/json/";
const key = "c0d50870-63e8-4878-9257-8a4d8e590ab6";

function handleSubmit(event) {
  event.preventDefault();
  const inputElValue = document.getElementById("lookUpInput").value;
  const query = URL + inputElValue + "?key=" + key;
  console.log(query);
  fetch(query)
    .then((response) => response.json())
    .then((data) => console.log(data));
  resultEl.innerHTML = inputElValue + ": ";
}
