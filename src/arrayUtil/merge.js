import isArray from '../commonUtil/isArray'
import deepClone from '../commonUtil/deepClone'
/**
 * @description 数组合并
 * @param {...Array}  数组 [],[],[]
 * @return {Array} 合并后的数组
 */
export default function merge () {
  var args = Array.from(arguments)
  var len = args.length
  var target = []
  for (var i = 0; i < len; i++) {
    if (isArray(args[i])) {
      var itemLen = args[i].length
      for (var j = 0; j < itemLen; j++) {
        target.push(deepClone(args[i][j]))
      }
    }
  }
  return target
}