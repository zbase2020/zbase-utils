import isArray from '../commonUtil/isArray'
import isEqual from '../commonUtil/isEqual'
/**
 * @description 查找数组最后一个匹配值的下标
 * @param {Array}  source 数组 []
 * @return {Array} 查找数组最后一个匹配值的下标
 */
export default function findLastIndex (source, target) {
  if (!isArray(source)) {
    return source
  }
  var index = -1
  var len = source.length
  for (var i = len - 1; i >= 0; i--) {
    if (isEqual(target, source[i])) {
      index = i
      break
    }
  }
  return index
}