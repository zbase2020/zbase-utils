import isString from '../commonUtil/isString'
/**
 * @description 字符串出现最多次数
 * @param {String}  str 字符串
 * @return {Object} 字符串出现最多次数
 */
export default function maxString (str) {
  if (!isString(str)) {
    console.error('传入参数不是字符串')
    return
  }
  var maxNum = 0
  var obj = {}
  var arr = str.split('')
  var len = arr.length
  for (var i = 0; i < len; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]] += 1
    }
    if (maxNum < obj[arr[i]]) {
      maxNum = obj[arr[i]]
    }
  }
  return {
    strs: Object.keys(obj).filter(ele => obj[ele] === maxNum),
    num: maxNum
  }
}