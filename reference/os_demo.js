const os = require('os');

// getting platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core info
console.log(os.cpus());

// free memory
console.log(os.freemem());

// total memory
console.log(os.totalmem());

// home directory 
console.log(os.homedir());

// UPtime
console.log(os.uptime());