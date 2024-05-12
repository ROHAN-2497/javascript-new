let marks = [97, 64, 32, 49, 99, 96, 86];

let highestMarks = marks.filter((val) => {
  return val > 90;
});
console.log(highestMarks);
