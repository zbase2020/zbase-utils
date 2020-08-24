import isObject from '../commonUtil/isObject'
import has from './has'
/**
 * @description 返回可枚举的key
 * @param {Object}  obj 对象
 * @return {Array} 返回可枚举的key
 */
export default function keys (obj) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return []
  }
  if (Object.keys) {
    return Object.keys(obj)
  }
  var arr = []
  for (var key in obj) {
    if (has(obj, key)) {
      arr.push(key)
    }
  }
  return arr
}