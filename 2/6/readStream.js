const fs = require("fs");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8")
console.log("type something...")
/* process.stdin.on("data", data => {
    console.log(`I read ${data.length -1} characters of text`)
}) */

let fileTxt = ""

readStream.on("data", data => {
    console.log(`I read ${data.length -1} characters of text`);
    fileTxt += data;
})
readStream.on("data", (data) => {
    console.log(data);
})
readStream.on("end", () => {
    console.log("finished reading file");
    console.log(`In totalI read ${fileTxt.length -1} characters of text`)
})