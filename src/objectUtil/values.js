import isObject from '../commonUtil/isObject'
import keys from './keys'
/**
 * @description 返回可枚举的value
 * @param {Object}  obj 对象
 * @return {Array} 返回可枚举的value
 */
export default function values (obj) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return []
  }
  var arr = []
  var keysArr = keys(obj) || []
  var len = keysArr.length
  for (var i = 0; i < len; i++) {
    arr.push(obj[keysArr[i]])
  }
  return arr
}