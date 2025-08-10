let myLeads = [];

const inputEl = document.getElementById("input-el");
const saveInputEl = document.getElementById("saveInput-el");
const ulEl = document.getElementById("myList");

//Check for the added leads and show if already added
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderList();
}

saveInputEl.addEventListener("click", () => {
  const inputValue = inputEl.value;
  if (inputValue !== "") {
    myLeads.push(inputEl.value);
    //storing each lead to the localStorage on click
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
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
