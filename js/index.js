// Your code goes here
let logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", function(event) {
    event.target.style.color = "purple";
});

logo.addEventListener("mouseout", function(event) {
    event.target.style.color = "black";
});

let button = document.querySelector(".btn");

button.addEventListener("click", function(event) {
    event.target.style.color = "green";
});

let headerImg = header.querySelector("img");

headerImg.addEventListener("dblclick", target.event.toggle("large"));

window.addEventListener("online", function(event) {
    console.log("You're online!");
});

window.addEventListener("offline", function(event) {
    console.log("Connection lost!");
});

window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        location.reload();
    }
});

content = document.querySelector(".content-section");

content.addEventListener("focusin", function(event) {
    event.target.style.background = 'pink';
});

window.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
        location.reload();
    }
});

function pSelection(event) {
    let p = document.querySelector("p");
    let selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    p.textContent = `You selected: ${selection}`;
  }
  
  let input = document.querySelector('input');
  input.addEventListener('select', pSelection);