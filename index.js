// Write your code here!
document.querySelector('main#main').remove();
let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Shaqqour is the champion";
document.body.appendChild(newHeader);