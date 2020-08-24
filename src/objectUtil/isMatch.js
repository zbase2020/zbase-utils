import isObject from '../commonUtil/isObject'
import isEqual from '../commonUtil/isEqual'
import keys from './keys.js'
import deepHas from './deepHas'
  /**
   * @description 是否包含
   * @param {Object}  obj 对象
   * @param {Object}  other 目标对象
   * @return {Boolean} 是否包含
   */
  export default function isMatch (obj, other) {
    if (!isObject(obj)) {
      console.error('传入参数不是对象')
      return obj
    }
    var bol = true
    var keyArr = keys(other)
    var len = keyArr.length
    for (var i = 0; i < len; i++) {
      var key = keyArr[i]
      if (deepHas(obj, key) && isEqual(obj[key], other[key])) {
        continue
      }
      bol = false
    }
    return bol
  }
