let os = require("os");

console.log(os.platform()); //win32
console.log(os.arch()); //x64
console.log(os.cpus().length + " core");
console.log(os.freemem()); //free memory in bytes
console.log(os.uptime()); //seconds system is up and running