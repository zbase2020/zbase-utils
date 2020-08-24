/**
 * @description 延迟
 * @param {Function}  func 函数
 * @param {Number}  wait 延迟时间
 * @param {*}  args 其他参数
 * @return {*}
 */
export default function delay (func, wait, ...args) {
  if (typeof func !== 'function') {
    throw new TypeError('传入不是函数')
  }
  return setTimeout(func, +wait || 0, ...args)
}
