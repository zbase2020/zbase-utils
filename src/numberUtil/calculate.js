import isNumber from '../commonUtil/isNumber'
import plus from './plus'
import minus from './minus'
import times from './times'
import div from './div'
/**
 * @description 数字计算
 * @param {Number}  num1 数字
 * @param {String}  type 运算符
 * @param {Number}  num2 数字
 * @return {Number} 数字
 */
export default function calculate (num1, type, num2) {
  if (!isNumber(num1) || !isNumber(num2)) {
    console.error('传入参数不是数字')
    return
  }
  // 加，减，乘，除
  // const typeArr = ['plus', 'minus', 'times', 'div']
  switch (type) {
    case '+':
    case 'plus':
      return plus(num1, num2)
    case '-':
    case 'minus':
      return minus(num1, num2)
    case '*':
    case 'times':
      return times(num1, num2)
    case '/':
    case 'div':
      return div(num1, num2)
    default:
      console.error(`暂不支持(${type})运算`)
      break
  }
}