  import isObject from '../commonUtil/isObject'
  import keys from './keys'
  /**
   * @description 对象填充，只填充undefined
   * @param {Object}  obj 被填充对象
   * @param {*}  other 填充内容
   * @param {Boolean}  isDeep 是否深度填充
   * @return {Object} 填充后对象
   */
  export default function fill (obj, other, isDeep) {
    if (!isObject(obj)) {
      console.error('传入参数不是对象')
      return {}
    }
    var keysArr = keys(obj)
    var len = keysArr.length
    for (var i = 0; i < len; i++) {
      var key = keysArr[i]
      if (obj[key] === undefined) {
        obj[key] = other
      } else if (isObject(obj[key]) && isDeep) {
        fill(obj[key], other, isDeep)
      }
    }
    return obj
  }