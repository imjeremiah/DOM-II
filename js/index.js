// Your code goes here
let logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseover", function(event) {
    event.target.style.color = "purple";
});

logo.addEventListener("mouseout", function(event) {
    event.target.style.color = "black";
});

gsap.to(".logo-header", {duration: 2, x: 300});

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

function listener(event) {
    console.log(`event passing through ${event.currentTarget.nodeName} target --> ${event.taget.nodeName}`)
}

document.body.addEventListener("click", function(event) {
    event.stopPropagation();
});
document.body.addEventListener("click", listener);

Array.from(document.links).forEach(function(link) {
    link.addEventListener("click", function(event) {
        console.log(`disrupting the default behavior of ${event.target.textContent}`)
    event.preventDefault();
    });
});