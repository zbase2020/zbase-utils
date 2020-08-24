import isNumber from '../commonUtil/isNumber'
/**
 * @description 数字相减
 * @param {Number}  num1 数字
 * @param {Number}  num2 数字
 * @return {Number} 数字
 */
export default function minus (num1, num2) {
  if (!isNumber(num1) || !isNumber(num2)) {
    console.error('传入参数不是数字')
    return
  }
  var arr1 = num1.toString().split('.')
  var arr2 = num2.toString().split('.')
  var len1 = (arr1[1] && arr1[1].length) || 0
  var len2 = (arr2[1] && arr2[1].length) || 0
  var dif = Math.abs(len1 - len2)
  var m = Math.pow(10, Math.max(len1, len2))
  if (dif > 0) {
    var difm = Math.pow(10, dif)
    if (len1 > len2) {
      num1 = Number(num1.toString().replace('.', ''))
      num2 = Number(num2.toString().replace('.', '')) * difm
    } else {
      num1 = Number(num1.toString().replace('.', '')) * difm
      num2 = Number(num2.toString().replace('.', ''))
    }
  } else {
    num1 = Number(num1.toString().replace('.', ''))
    num2 = Number(num2.toString().replace('.', ''))
  }
  return (num1 - num2) / m
}
