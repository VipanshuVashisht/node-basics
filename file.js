const fs = require("fs")

fs.writeFileSync("./test.js", "rewritten file");
const res1 = fs.readFileSync("./test.js", "utf-8")
console.log("Result before rewriting: ", res1);
fs.writeFileSync("./test.js", "newest edit");
const res2 = fs.readFileSync("./test.js", "utf-8");
console.log("Result after editing the file: ", res2);