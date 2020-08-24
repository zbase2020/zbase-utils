import isNumber from '../commonUtil/isNumber'
/**
 * @description 数字相除
 * @param {Number}  num1 数字
 * @param {Number}  num2 数字
 * @return {Number} 数字
 */
export default function div (num1, num2) {
  if (!isNumber(num1) || !isNumber(num2)) {
    console.error('传入参数不是数字')
    return
  }
  var arr1 = num1.toString().split('.')
  var arr2 = num2.toString().split('.')
  var len1 = (arr1[1] && arr1[1].length) || 0
  var len2 = (arr2[1] && arr2[1].length) || 0
  return (Number(num1.toString().replace('.', '') / Number(num2.toString().replace('.', '')))) * Math.pow(10, (len2 - len1))
}