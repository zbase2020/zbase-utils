import isObject from '../commonUtil/isObject'
import keys from './keys'
/**
 * @description 创建具有原型的对象
 * @param {Object}  prototype 原型
 * @param {Object}  obj 对象
 * @return {Object} 转换后的对象
 */
function baseFn () {
  return function () {}
}
export default function create (prototype, obj) {
  var res = {}
  if (isObject(prototype)) {
    if (Object.create) {
      res = Object.create(prototype)
    } else {
      var Base = baseFn()
      Base.prototype = prototype
      res = new Base;
      Base.prototype = null
    }
  }
  if (isObject(obj)) {
    var keysArr = keys(obj)
    var len = keysArr.length
    for (var i = 0; i < len; i++) {
      var key = keysArr[i]
      res[key] = obj[key]
    }
  }
  return res
}