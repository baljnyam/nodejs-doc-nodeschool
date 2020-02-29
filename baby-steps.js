sum = 0;
process.argv.forEach((val, index) => {
  if (Number(index) in [1, 0]) {
    return;
  }
  sum = sum + Number(val);
});
console.log(sum);
