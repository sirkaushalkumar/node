const fs = require("fs");
fs.renameSync("./assets/colors.json", "./assets/colorData.json");
fs.rename("./assets/notes.md", "./storagefiles/notes.md", err => {
    if (err) {
        throw err;
    }
})
setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg")
})