console.log(process.pid)
console.log(process.versions.node)
//console.log(process.argv)
//const[,,firstname,lastname] = process.argv
//console.log(`Yoyr name is ${firstname} ${lastname}`)

const grab = flag => {
    let indexafterflag = process.argv.indexOf(flag) + 1;
    //console.log(indexafterflag)
    return process.argv[indexafterflag]
}
const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)