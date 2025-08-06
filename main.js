let myLeads = [];

const inputEl = document.getElementById("input-el");
const saveInputEl = document.getElementById("saveInput-el");
const ulEl = document.getElementById("myList");

saveInputEl.addEventListener("click", () => {
  const inputValue = inputEl.value;
  if (inputValue !== "") {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    renderList();
  }
});

function renderList() {
  ulEl.innerHTML = "";
  myLeads.forEach((lead) => {
    const liEl = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.href = lead.startsWith("https") ? lead : "https://" + lead;
    aTag.textContent = lead;
    aTag.target = "_blank";
    liEl.appendChild(aTag);
    ulEl.appendChild(liEl);
  });
}
