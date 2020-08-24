/**
 * @description 判断元素是否为参数对象
 * @param {*} source 元素
 * @return {Boolen}
 */
export default function isArguments (source) {
  return Object.prototype.toString.call(source) === '[object Arguments]'
}