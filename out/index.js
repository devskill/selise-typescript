// 1. Select the div element using the id property
var app = document.getElementById("app");
var nameBox = document.getElementsByTagName("input")[0].value;
var attrValue = app.getAttribute("block").toString();
var childs = app.children[1];
// 2. Create a new <p></p> element programmatically
var p = document.createElement("p");
// 3. Add the text content
p.textContent = childs.toString();
// 4. Append the p element to the div element
app === null || app === void 0 ? void 0 : app.appendChild(p);
//# sourceMappingURL=index.js.map