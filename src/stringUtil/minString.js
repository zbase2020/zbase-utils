import isString from '../commonUtil/isString'
/**
 * @description 字符串出现最少次数
 * @param {String}  str 字符串
 * @return {Object} 字符串出现最少次数
 */
export default function minString (str) {
  if (!isString(str)) {
    console.error('传入参数不是字符串')
    return
  }
  var obj = {}
  var arr = str.split('')
  var len = arr.length
  var minStr = arr[0]
  for (var i = 0; i < len; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]] += 1
    }
    if (obj[minStr] > obj[arr[i]]) {
      minStr = arr[i]
    }
  }
  return {
    strs: Object.keys(obj).filter(ele => obj[ele] === obj[minStr]),
    num: obj[minStr]
  }
}