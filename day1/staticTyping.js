"use strict";
// variableName:{Typing}
var str;
var num;
var user = function (nam) {
    return "こんにちは" + nam + "さん";
};
console.log(user("Hoge"));
var array = ["たかし", 37, 173, 75];
var nam = array[0], age = array[1], height = array[2], weight = array[3];
console.log(nam);
console.log("\u3053\u3093\u306B\u3061\u308F\u3001\u79C1\u306F" + nam + "!" + age + "\u6B73\u3060\u3088");
