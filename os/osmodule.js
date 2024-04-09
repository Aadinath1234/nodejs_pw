const os = require('os'); 


console.log("CPU Architecture : ", os.arch());

console.log('Free memory : ', os.freemem());
console.log('Total memory : ', os.totalmem());
console.log("Network interfaces: " +  JSON.stringify(os.networkInterfaces()));

console.log("Os default tempt dir: " + os.tmpdir());

console.log("Endianess: " + os.endianness());

console.log("Hostname: " + os.hostname());

console.log("OS type : " + os.type());

console.log("OS platform : " + os.platform());

console.log("OS release: "+ os.release());


