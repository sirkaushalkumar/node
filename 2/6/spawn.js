const cp = require("child_process")
const questionApp = cp.spawn("node", ["questions.js"])
questionApp.stdin.write("Kaushal Kumar \n")
questionApp.stdin.write("India \n")
questionApp.stdin.write("Write code \n")
questionApp.stdout.on("data", data => {
    console.log(`from th question app: ${data}`)
})
questionApp.on("close",() => {
    console.log(`questionaApp Process exited`)
})