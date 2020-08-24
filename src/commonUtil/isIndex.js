/**
 * @description 判断元素是否为下标
 * @param {String | Number} index 下标
 * @param {String | Number} length 长度
 * @return {Boolen}
 */
export default function isIndex (index, length) {
  var indexReg = /^(0|[1-9]\d*)$/
  if (!indexReg.test(index)) return false;
  // Math.pow(2, 32) - 1
  length = indexReg.test(length) ? length : 4294967295
  return index < length
}
