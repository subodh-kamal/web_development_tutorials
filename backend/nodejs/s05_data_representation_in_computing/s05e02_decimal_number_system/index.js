const digitsList1 = [2, 4, 6, 5];
const digitsList2 = [7, 3, 2];

const num = 2 * 1 + 4 * 10 + 6 * 100 + 5 * 1000;
const num2 = 7 * 1 + 3 * 10 + 2 * 100;
const num3 = 7 * Math.pow(10, 0) + 3 * Math.pow(10, 1) + 2 * Math.pow(10, 2);

// console.log(num);
// console.log(num2);
// console.log(num3);


function digitsToNumber(...nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans += nums[i] * Math.pow(10, i);
  }

  return ans;
}

console.log(digitsToNumber(...digitsList1));
