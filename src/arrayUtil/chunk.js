import isArray from '../commonUtil/isArray'
/**
 * @description 切割数组
 * @param {Array}  source 数组 [1,2,3,4]
 * @param {Number} size 分割个数 2
 * @return {Array} 切割数组 [[1,2], [3,4]]
 */
export default function chunk (source, size) {
  if (!isArray(source)) {
    return source
  }
  var target = []
  var len = Math.ceil(source.length / size)
  for (var i = 0; i < len; i++) {
    var start = i * size
    var end = start + size
    target.push(source.slice(start, end))
  }
  return target
}