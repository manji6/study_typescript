
// variableName:{Typing}
var str: string;
var num: number;

let user = (nam: string) => {
  return "こんにちは" + nam + "さん";
}

console.log(user("Hoge"));

const array = ["たかし", 37, 173, 75];

const [nam, age, height, weight] = array;

console.log(nam);


console.log(`こんにちわ、私は${nam}!${age}歳だよ`);
