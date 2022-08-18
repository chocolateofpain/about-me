const { killerBunnyHelper } = require('./_helpers.js')

const { nestedHelper1 } = require('./helperFolder/nestedHelper1.js')
const { nestedHelper2 } = require('./helperFolder/nestedHelper2.js')

console.log('Killer Bunny is doing syncing in a folder')

killerBunnyHelper()
nestedHelper1()
nestedHelper2()
