import isObject from '../commonUtil/isObject'
import keys from './keys'
/**
 * @description 对象合并只改undefined
 * @param {Object}  obj 被填充对象
 * @param {Object}  defaultObj default对象
 * @return {Object} 合并对象
 */
export default function defaults (obj, defaultObj) {
  if (!isObject(obj) || !isObject(defaultObj)) {
    console.error('传入参数不是对象')
    return {}
  }
  var keysArr = keys(defaultObj)
  var len = keysArr.length
  for (var i = 0; i < len; i++) {
    var key = keysArr[i]
    if (obj[key] === undefined) {
      obj[key] = defaultObj[key]
    }
  }
  return obj
}