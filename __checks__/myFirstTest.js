const { killerBunnyHelper } = require('./_helpers.js')

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
