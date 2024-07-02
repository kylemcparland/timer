const array = process.argv.slice(2)
  .filter((num) => num > 0)
  .sort((a, b) => a - b)
  .map((x) => x * 1000)
  .filter((num) => Number.isInteger(num));

for (let x in array) {
  if (array[x] !== array[x - 1]) {
    setTimeout(() => {
      process.stdout.write('\u0007');
      console.log(`⏰ Alarm at ${array[x] / 1000} seconds!`);
    }, array[x]);
  }
}