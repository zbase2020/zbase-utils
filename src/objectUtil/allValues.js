import isObject from '../commonUtil/isObject'
import allKeys from './allKeys'
/**
 * @description 返回可枚举的value，包括原型链
 * @param {Object}  obj 对象
 * @return {Array} 返回可枚举的value
 */
export default function allValues (obj) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return []
  }
  var arr = []
  var keysArr = allKeys(obj) || []
  var len = keysArr.length
  for (var i = 0; i < len; i++) {
    arr.push(obj[keysArr[i]])
  }
  return arr
}