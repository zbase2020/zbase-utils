const { isNumber } = require('../zbase-utils.js')
const { functionUtil } = require('../zbase-utils')
const util = require('../zbase-utils')

console.log(isNumber('123'))
console.log(isNumber(123))

var fn = functionUtil.once(function (name) {
  console.log('name==', name)
  return name
})
fn('aa')
fn('bb')
fn('cc')
console.log('util', util)
