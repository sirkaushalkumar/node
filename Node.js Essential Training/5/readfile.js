const fs = require("fs");
fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    if (err) {
        console.log(`A error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read")
    console.log(text)
})
fs.readFile("./assets/alex.jpg", (err, img) => {
    if (err) {
        throw err;
    }
    console.log("file contents read")
    console.log(img)
})