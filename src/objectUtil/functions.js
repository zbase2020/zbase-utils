import isObject from '../commonUtil/isObject'
import isFunction from '../commonUtil/isFunction'
import has from './has'
/**
 * @description 返回对象下的函数名
 * @param {Object}  obj 对象
 * @return {Array} 函数名
 */
export default function functions (obj) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return []
  }
  var arr = []
  for (var key in obj) {
    if (has(obj, key) && isFunction(obj[key])) {
      arr.push(key)
    }
  }
  return arr
}