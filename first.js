let newBtn = document.createElement("button");
newBtn.innerText = "newBtn!";
console.log(newBtn);
// let div = document.querySelector("div");
// div.append(newBtn);

let div = document.querySelector("div");
div.prepend(newBtn);
