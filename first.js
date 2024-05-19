let toggleBtn = document.querySelector("#toggleBtn");

let currentMood = "light";

toggleBtn.addEventListener("click", () => {
  if (currentMood === "light") {
    currentMood = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currentMood = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currentMood);
});
