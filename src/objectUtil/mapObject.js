import isObject from '../commonUtil/isObject'
import keys from './keys'
/**
 * @description 转换属性值
 * @param {Object}  obj 对象
 * @param {Function}  fn 函数
 * @return {Object} 转换后的对象
 */
export default function mapObject (obj, fn) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return {}
  }
  var keysArr = keys(obj)
  var len = keysArr.length
  var res = {}
  for (var i = 0; i < len; i++) {
    var key = keysArr[i]
    res[key] = fn && fn(obj[key], key, obj)
  }
  return res
}