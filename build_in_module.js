const os = require('os');
// import * as os from 'os'
const path = require('path');


/*os Module */
console.log(os.userInfo());

const systemDetails = {
    type:os.type(),
    memoInfo : os.totalmem(),
    freeMemo: os.freemem(),
    uptime:os.uptime(),
    cpu:os.cpus()

}

console.log('system Info :', systemDetails);


/*path Modulue */
console.log(path.sep)
const filePath = path.join('mypath','mysubpath','test.js');
console.log(filePath)
console.log(path.basename(filePath))
const absolutePath = path.resolve(__dirname,'mypath','mysubpath','test.js');

console.log(absolutePath)