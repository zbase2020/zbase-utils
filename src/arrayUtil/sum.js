import isArray from '../commonUtil/isArray'
/**
 * @description 数组求和
 * @param {Array}  source 数组 []
 * @return {Array} 数组求和
 */
export default function sum (source) {
  if (!isArray(source)) {
    return source
  }
  var target = ''
  var len = source.length
  for (var i = 1; i < len; i++) {
    target += source[i]
  }
  return target
}
