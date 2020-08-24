import isArray from '../commonUtil/isArray'
/**
 * @description 数组扁平化
 * @param {Array}  source1 数组 [[[]],[]]
 * @return {Array} 展开的数组
 */
export default function flat (source) {
  if (!isArray(source)) {
    return source
  }
  var target = []
  var len = source.length
  for (var i = 0; i < len; i++) {
    if (isArray(source[i])) {
      target = target.concat(flat(source[i]))
    } else {
      target.push(source[i])
    }
  }
  return target
}