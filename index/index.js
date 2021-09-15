var cowsay = require('cowsay');
const fs = require('fs');

let count = 0;
let flag = false;

let time = setInterval(() => {
  const file = fs.readFileSync('./text.txt', 'utf-8');
  const arrFile = file.trim().split('\n');
  console.log(arrFile[count]);
  console.clear();
  console.log(
    cowsay.say({
      text: `${arrFile[count]}`,
      e: 'oo',
      T: 'U ',
    })
  );
  count++;
  if (count > 15) {
    flag = true;
  }
}, 1800);

setTimeout(() => {
  clearInterval(time);
}, 28800);
