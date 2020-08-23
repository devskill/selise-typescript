// 1. Select the div element using the id property
const app = document.getElementById("app");
let nameBox = document.getElementsByTagName("input")[0].value;

let attrValue = app.getAttribute("block").toString();

let childs = app.children[1];

// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");

// 3. Add the text content
p.textContent = childs.toString();

// 4. Append the p element to the div element
app?.appendChild(p);