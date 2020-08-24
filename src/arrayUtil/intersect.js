import isArray from '../commonUtil/isArray'
/**
 * @description 数组交集
 * @param {Array}  source1 数组 []
 * @param {Array}  source2 数组 []
 * @return {Array} 交集的数组
 */
export default function intersect (source1, source2) {
  if (!isArray(source1) || !isArray(source2)) {
    console.error('传入参数不是数组')
    return
  }
  return source1.filter(ele => source2.indexOf(ele) > -1)
}