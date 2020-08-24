import isObject from './isObject'
import isArray from './isArray'
/**
 * @description 深度克隆
 * @param {*} source
 * @return {*}
 */
export default function deepClone (source) {
  var target
  if (isObject(source)) {
    target = {}
    for (var key in source) {
      target[key] = deepClone(source[key])
    }
  } else if (isArray(source)) {
    target = []
    for (var i = 0, len = source.length; i < len; i++) {
      target.push(deepClone(source[i]))
    }
  } else {
    return source
  }
  return target
}
