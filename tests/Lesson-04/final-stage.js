// cách 1
// function findPairsDivisibleBy17() {
//   let count = 0;

//   for (let a = 1; a <= 100; a++) {
//     for (let b = a + 1; b <= 100; b++) {
//       if ((a + b) % 17 === 0) {
//         console.log(`(${a}, ${b}) = ${a + b}`);
//         count++;
//       }
//     }
//   }

//   console.log(`\nTổng cộng: ${count} cặp`);
// }

// // Test
// findPairsDivisibleBy17();


//cach 2    
// let count = 0;
// const seen = new Set();

// for (let i = 1; i <= 100; i++) {
//   const needed = (17 - (i % 17)) % 17;
//   seen.forEach(v => {
//     if ((v % 17) === needed) count++;
//   });
//   seen.add(i);
// }

//  console.log(`\nTổng cộng: ${count} cặp`);

//cach 3
const freq = Array(17).fill(0);

for (let i = 1; i <= 100; i++) {
  freq[i % 17]++;
}

let count = 0;

// r + (17 - r)
for (let r = 1; r <= 8; r++) {
  count += freq[r] * freq[17 - r];
}

// r = 0
count += (freq[0] * (freq[0] - 1)) / 2;

 console.log(`\nTổng cộng: ${count} cặp`);
