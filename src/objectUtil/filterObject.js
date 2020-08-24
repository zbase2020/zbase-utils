  import isObject from '../commonUtil/isObject'
  import keys from './keys'
  /**
   * @description 对象过滤
   * @param {Object}  obj 对象
   * @param {Function}  fn 函数
   * @return {String} 对象
   */
  export default function filterObject (obj, fn) {
    if (!isObject(obj)) {
      console.error('传入参数不是对象')
      return {}
    }
    var keysArr = keys(obj)
    var len = keysArr.length
    var res = {}
    for (var i = 0; i < len; i++) {
      var key = keysArr[i]
      if (fn && fn(obj[key], key, obj)) {
        res[key] = obj[key]
      }
    }
    return res
  }