const b = loadModule("./math.js");
const {sum} = loadModule("./sum.js");

console.log(sum(4,3,2,1));

console.log(b);

function loadModule(path) {
  const fs = require("fs");
  const fileContent = fs.readFileSync(path).toString();
//   console.log(fileContent);

  return (function (send) {
    eval(fileContent);
    // console.log(send);
    return send;
  })({});
}
