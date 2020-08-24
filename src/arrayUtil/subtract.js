import isArray from '../commonUtil/isArray'
/**
 * @description 数组差集
 * @param {Array}  source1 数组1 []
 * @param {Array}  source2 数组2 []
 * @param {String} type 返回哪边的差值 left,right,both
 * @return {Array} 差集的数组
 */
export default function subtract (source1, source2, type) {
  if (!isArray(source1) || !isArray(source2)) {
    console.error('传入参数不是数组')
    return
  }
  if (type === 'both') {
    return source1.concat(source2).filter(ele => ((source1.indexOf(ele) === -1 && source2.indexOf(ele) > -1) || (source1.indexOf(ele) > -1 && source2.indexOf(ele) === -1)))
  } else if (type === 'right') {
    return source2.filter(ele => source1.indexOf(ele) === -1)
  } else {
    return source1.filter(ele => source2.indexOf(ele) === -1)
  }
}