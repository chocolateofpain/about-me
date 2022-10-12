const { killerBunnyHelper } = require('./_helpers.js')

const { missingDep } = require('./nonExistentDep.js')

const { nestedHelper1 } = require('./helperFolder/nestedHelper1.js')
const { nestedHelper2 } = require('./helperFolder/nestedHelper2.js')

console.log('Killer Bunny is doing syncing in a folder')

killerBunnyHelper()
nestedHelper1()
nestedHelper2()

const playwright = require('playwright')
const assert = require('assert')

const browser = await playwright.chromium.launch()
const page = await browser.newPage()
await page.goto('https://www.google.com/')
const fs = require('fs')

const content = 'test'

fs.writeFileSync('/tempfile', content)

const readFile = await fs.promises.readFile('/tempfile', 'utf8')

assert(readFile === content, 'sync fs and promise api should return same value')
