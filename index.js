//create header element and populate according to specifications
const newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");
newHeader.textContent = "Frankie is the champion";
//fetch main element and remove id 'main'
const main = document.getElementById("main");
main.removeAttribute("id","main");