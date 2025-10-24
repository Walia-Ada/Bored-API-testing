
const list = document.querySelector("#names");

fetch("https://data.cityofnewyork.us/api/views/25th-nujf/rows.json?accessType=DOWNLOAD")
  .then(response => response.json())
  .then(pizza => {
    console.log(pizza[0]);              
    pizza.forEach(pizza => {
        list.innerHTML += `<li>${pizza.gndr}</li>`;
      });
    }); 


let ada = document.querySelector("#b1");

ada.textContent = "I changed the first point using query selector.";
ada.style.color = "red";

const lastnames = ["Walia", "Singh", "Kaur"];
const greeting = `<h2>Dear Ms. ${lastnames[0]}</h2>`; 

let display = document.querySelector("#adaput"); 

display.innerHTML = greeting; 

console.log(greeting);

const output = document.querySelector("#output"); 

output.textContent = `We have ${lastnames.length} last names`; 

console.log(lastnames.length); 

let html = ""; 

for (const lastname of lastnames) {
    html += `<p>Dear Ms. ${lastname}</p>`;
}

output.innerHTML = html; 

console.log(html); 