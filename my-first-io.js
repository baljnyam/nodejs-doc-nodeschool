var fs = require("fs");
var file = process.argv[2],
  count = 0,
  buf;

buf = fs.readFileSync(file, "utf8");
buf = buf.replace(/\n+$/, "");
buf = buf.split("\n");
count = buf.length - 1;

console.log(count);
