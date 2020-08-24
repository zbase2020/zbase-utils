/**
 * @description 创建一个最多调用count次数的函数
 * @param {Function}  func 函数
 * @param {Number}  count 调用次数
 * @return {*}
 */
export default function before (count, func) {
  var memo;
  return function() {
    if (--count > 0) {
      memo = func.apply(this, arguments);
    }
    if (count <= 1) func = null;
    return memo;
  };
}
