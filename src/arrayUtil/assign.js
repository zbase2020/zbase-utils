import isArray from '../commonUtil/isArray'
import deepClone from '../commonUtil/deepClone'
/**
 * @description 数组替换
 * @param {Array} source1 数组1
 * @param {Array} source2 数组2
 * @param {Boolean} isAppend source1长度不够是否追加
 * @return {Array} 替换后的数组
 */
export default function assign (source1 = [], source2 = [], isAppend = false) {
  if (!isArray(source1) || !isArray(source2)) {
    console.error('传入参数不是数组')
    return
  }
  var target = []
  var len1 = source1.length
  var len2 = source2.length
  if (len2 > len1 && isAppend) {
    target = deepClone(source2)
  } else {
    for (var i = 0; i < len1; i++) {
      if (len2 > i) {
        target.push(deepClone(source2[i]))
      } else {
        target.push(deepClone(source1[i]))
      }
    }
  }
  return target
}