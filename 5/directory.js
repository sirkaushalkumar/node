const fs = require("fs");
if (fs.existsSync("storagefiles")) {
    console.log("Already there")
} else {
    fs.mkdir("storagefiles", err => {
        if (err) {
            throw error
        }
        console.log("directory created")
    })
}
