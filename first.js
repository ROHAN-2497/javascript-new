let toggle = document.querySelector("#overtoggl");
let body = document.querySelector(".para");

let mouseOver = "TextBig";

toggle.addEventListener("mouseover", () => {
  if (mouseOver === "TextBig") {
    mouseOver = "Small";
    body.classList.add("TextBig");
    body.classList.remove("Small");
  } else {
    mouseOver = "TextBig";
    body.classList.add("Small");
    body.classList.remove("TextBig");
  }
  console.log(mouseOver);
});
