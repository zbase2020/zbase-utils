import before from './before'
/**
 * @description 创建一个只调用一次的函数
 * @param {Function}  func 函数
 * @return {*}
 */
export default function once(func) {
  return before(2, func)
}
