const countVowel = (str) => {
  let count = 0;
  for (const chart of str) {
    if (
      chart === "a" ||
      chart === "e" ||
      chart === "i" ||
      chart === "o" ||
      chart === "u"
    ) {
      count++;
    }
  }
  return count;
};

let countVowels = "Rohan Islam";
let result = countVowel(countVowels);
console.log(result);
