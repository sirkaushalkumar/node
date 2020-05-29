const fs = require("fs");
const md = `
# This is a new file

We can write texr to a file iwth fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile


`;
fs.writeFile("./assets/notes.md", md.trim(), err => {
    if(err){
        throw err;
    }
    console.log("file saved");
})