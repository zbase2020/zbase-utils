/**
 * @description 判断元素是否为对象
 * @param {*} source
 * @return {Boolen}
 */
export default function isObject (source) {
  return Object.prototype.toString.call(source) === '[object Object]'
}