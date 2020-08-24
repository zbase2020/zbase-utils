import isArray from '../commonUtil/isArray'
/**
 * @description 数组并集
 * @param {Array}  source1 数组 []
 * @param {Array}  source2 数组 []
 * @return {Array} 并集的数组
 */
export default function union (source1, source2) {
  if (!isArray(source1) || !isArray(source2)) {
    console.error('传入参数不是数组')
    return
  }
  return source1.concat(source2)
}