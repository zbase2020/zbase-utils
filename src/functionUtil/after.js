/**
 * @description 创建一个允许count次才有效果的函数
 * @param {Function}  func 函数
 * @param {Number}  count 调用次数
 * @return {*}
 */
export default function after (count, func) {
  return function() {
    if (--count < 1) {
      return func.apply(this, arguments);
    }
  };
}
