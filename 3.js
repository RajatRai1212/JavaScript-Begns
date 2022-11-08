// command line
// process.argv has two inputs reserved pehla jahan node ki file hoti
// duja jis repository me hum hote
const fs = require('fs')
const input = process.argv
fs.writeFileSync(input[2],input[3])//creates file,content
