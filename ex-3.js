// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
for (let score of scores) {
  if (minScore === undefined) {
    minScore = score;
  } else if (score < minScore) {
    minScore = score;
  }
}

console.log(minScore);
