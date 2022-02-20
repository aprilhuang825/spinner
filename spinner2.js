process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinStr = '|/-\\|/-\\|\n';
const spinArr = spinStr.split("");
let time = 100;
for (const item of spinStr){
  setTimeout(() => {
    process.stdout.write('\r' + item);
  }, time);
  time += 200;
}