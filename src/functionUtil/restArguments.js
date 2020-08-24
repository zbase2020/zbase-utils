/**
 * @description 返回 function 的一个版本，该函数版本在调用时接收来自 startIndex 的所有参数，并将其收集到单个数组中。 如果未传递显式的 startIndex ，则将通过查看 function 本身的参数数来确定
 * @param {Function} func 函数
 * @param {Number} startIndex 起始参数
 * @return {Function} 函数
 */
export default function restArguments (func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex
  return function () {
    var length = Math.max(arguments.length - startIndex, 0),
      rest = Array(length),
      index = 0
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex]
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest)
      case 1:
        return func.call(this, arguments[0], rest)
      case 2:
        return func.call(this, arguments[0], arguments[1], rest)
    }
    var args = Array(startIndex + 1)
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index]
    }
    args[startIndex] = rest
    return func.apply(this, args)
  }
}
