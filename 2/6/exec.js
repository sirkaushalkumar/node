const cp = require("child_process")
/* cp.exec("open https://www.linkedin.com ")
cp.exec("open -a Terminal .") */
/* cp.exec("ls", (err, data) => {
    if(err){
        throw err;
    }
    console.log(data)
}) */
cp.exec("node readStream", (err, data, stderr) => {
    console.log(data)
})