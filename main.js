import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";
const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-75b1d-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const refInDb = ref(database);

console.log(database);

// let myLeads = [];

const inputEl = document.getElementById("input-el");
const saveInputEl = document.getElementById("saveInput-el");
// const tabs = document.getElementById("tab-el");
const deleteAll = document.getElementById("deleteAll-el");
const ulEl = document.getElementById("myList");

//Check for the added leads and show if already added
// const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// if (leadsFromLocalStorage) {
//   myLeads = leadsFromLocalStorage;
//   renderList(myLeads);
// }

// tabs.addEventListener("click", () => {
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     myLeads.push(tabs[0].url);
//     localStorage.setItem("myLeads", JSON.stringify(myLeads));
//     renderList(myLeads);
//   });
// });

//Dynamic function. Take an argument, allows that to have different arrays used eg:myLead[],oldLeads[]
function renderList(leads) {
  ulEl.innerHTML = "";
  leads.forEach((lead) => {
    const liEl = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.href = lead.startsWith("https") ? lead : "https://" + lead;
    aTag.textContent = lead;
    aTag.target = "_blank";
    liEl.appendChild(aTag);
    ulEl.appendChild(liEl);
  });
  console.log(leads);
}

saveInputEl.addEventListener("click", () => {
  const inputValue = inputEl.value;
  if (inputValue !== "") {
    // myLeads.push(inputEl.value);
    push(reinputEl.value);
    //storing each lead to the localStorage on click
    // localStorage.setItem("myLeads", JSON.stringify(myLeads));
    inputEl.value = "";
    renderList(myLeads);
  }
});

//Delete all the leads form the page and the localstorage
deleteAll.addEventListener("click", () => {
  // myLeads = [];
  // localStorage.removeItem("myLeads");
  // renderList(myLeads);
});
