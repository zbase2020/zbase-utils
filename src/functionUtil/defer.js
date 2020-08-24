/**
 * @description 延迟调用
 * @param {Function}  func 函数
 * @param {*}  args 其他参数
 * @return {*}
 */
export default function defer (func, ...args) {
  if (typeof func !== 'function') {
    throw new TypeError('传入不是函数')
  }
  return setTimeout(func, ...args)
}
