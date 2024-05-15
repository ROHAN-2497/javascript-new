let divs = document.querySelectorAll(".box");
let idx = 1;
for (const div of divs) {
  div.innerText = `New Unique value ${idx}`;
  idx++;
}
