//your JS code here. If required.
let list = document.querySelectorAll("li")
let div = document.querySelector("div");
let heading = document.querySelector("h1");
heading.innerText="Welcome to Accio Jobs!"

let para = document.createElement("p");
	para.innerText="5 software program developer profession paths";

div.append(para);

let span = document.createElement("span")
let v = span.innerText=" development"

for(let t of list){
	t.append(v)
}



