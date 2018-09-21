const filesys = require("fs");
const addr = filesys.readFile("./addresses.csv", "utf8", function (error, data) {
    if (!error) {
        console.log("read success", data);
        
    }
    else {
        console.log("error: ", error);
    }
});

const read = filesys.readFileSync("./addresses.csv", "utf8");
const read2 = filesys.readFileSync("./contacts.csv", "utf8");
console.log();