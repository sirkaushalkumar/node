const fs = require("fs")
const colorDate = require("./assets/colors.json")
colorDate.colorList.forEach(c => {
    fs.appendFile("./storagefiles/colors.md", `${c.color}: ${c.hex} \n`, err => {
        if(err){
            throw(err);
        }
    });
})