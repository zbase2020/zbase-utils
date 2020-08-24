import isObject from '../commonUtil/isObject'
import keys from './keys'
/**
 * @description 键值翻转
 * @param {Object}  obj 对象
 * @return {Object} 转换后的对象
 */
export default function invert (obj) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return {}
  }
  var keysArr = keys(obj)
  var len = keysArr.length
  var res = {}
  for (var i = 0; i < len; i++) {
    var key = keysArr[i]
    res[obj[key]] = key
  }
  return res
}