const counter = require("./myModule")
const {inc, dec, getCount} = require("./myModule")
counter.inc();
counter.inc();
counter.inc();
dec();
console.log(counter.getCount());
