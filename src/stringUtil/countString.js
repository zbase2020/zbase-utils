import isString from '../commonUtil/isString'
/**
 * @description 字符串出现次数
 * @param {String}  str 字符串
 * @param {String}  query 需要查找的字符串
 * @return {Number | Object} 字符串出现次数
 */
export default function countString (str, query) {
  if (!isString(str)) {
    console.error('传入参数不是字符串')
    return 0
  }
  if (isString(query) && query !== '') {
    var num = 0
    while (str.indexOf(query) > -1) {
      num++
      str = str.replace(query, '')
    }
    return num
    // var reg = new RegExp(query, 'g')
    // var arr = str.match(reg)
    // return arr && arr.length
  }
  var obj = {}
  var arr = str.split('')
  var len = arr.length
  for (var i = 0; i < len; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]] += 1
    }
  }
  return obj
}