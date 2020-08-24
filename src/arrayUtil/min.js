import isArray from '../commonUtil/isArray'
/**
 * @description 数组最小值
 * @param {Array}  source 数组 []
 * @return {Array} 数组最小值
 */
export default function min (source) {
  if (!isArray(source)) {
    return source
  }
  var target = source[0]
  var len = source.length
  for (var i = 1; i < len; i++) {
    if (target > source[i]) {
      target = source[i]
    }
  }
  return target
}