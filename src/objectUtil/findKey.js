import isObject from '../commonUtil/isObject'
import has from './has'
import isEqual from '../commonUtil/isEqual'
/**
 * @description 根据value查找对象下的key
 * @param {Object}  obj 对象
 * @return {String} 对象下的key
 */
export default function findKey (obj, value) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return
  }
  var str = ''
  for (var key in obj) {
    if (has(obj, key) && isEqual(obj[key], value)) {
      str = key
      break
    }
  }
  return str
}