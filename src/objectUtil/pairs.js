import isObject from '../commonUtil/isObject'
import keys from './keys'
/**
 * @description 把一个对象转变为一个[key, value]形式的数组
 * @param {Object}  obj 对象
 * @return {Array} 转换后的数组
 */
export default function pairs (obj) {
  if (!isObject(obj)) {
    console.error('传入参数不是对象')
    return []
  }
  var keysArr = keys(obj)
  var len = keysArr.length
  var arr = []
  for (var i = 0; i < len; i++) {
    var key = keysArr[i]
    arr.push([key, obj[key]])
  }
  return arr
}