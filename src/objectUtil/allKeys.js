import isObject from '../commonUtil/isObject'
/**
 * @description 返回可枚举的key，包括原型链
 * @param {Object}  obj 对象
 * @return {Array} 返回可枚举的key
 */
export default function allKeys (obj) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return []
  }
  var arr = []
  for (var key in obj) {
    arr.push(key)
  }
  return arr
}