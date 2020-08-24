import isArray from '../commonUtil/isArray'
import isEqual from '../commonUtil/isEqual'
/**
 * @description 查找数组第一个匹配值的下标
 * @param {Array}  source 数组 []
 * @return {Array} 查找数组第一个匹配值的下标
 */
export default function findIndex (source, target) {
  if (!isArray(source)) {
    return source
  }
  var index = -1
  var len = source.length
  for (var i = 1; i < len; i++) {
    if (isEqual(target, source[i])) {
      index = i
      break
    }
  }
  return index
}